"use client"
import { Sidebar } from '@/components/Sidebar'
import Image from 'next/image'
import Contract from '../../artifacts/contracts/DocumentAuthentication.sol/DocumentAuthentication.json'
import { websiteAddress } from '@/shared/config'
import { ethers } from 'ethers'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createHash } from 'crypto'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

import Select from 'react-select'


const authenticateDocumentFormSchema = z.object({
  document_type: z.string()
    .nonempty('O tipo de documento é obrigatório')
    .refine(item => documentTypes.map(type => type.value).includes(item)),
  file: z
    .any()
    .transform((list) => list.item(0)!)
    .refine(file => file?.length == 1, 'O documento é obrigatório')
    .refine(
      (file) => file?.size <= 1024 * 1024,
      'O arquivo precisa ter no máximo 5Mb',
    ),
})

type AuthenticateDocumentFormData = z.infer<typeof authenticateDocumentFormSchema>


const documentTypes = [
  {
    "label": "Escritura de imóvel",
    "value": "PROPERTY_DEED"
  },
  {
    "label": "Testamento",
    "value": "WILL"
  },
  {
    "label": "Contrato",
    "value": "CONTRACT"
  },
  {
    "label": "Procuração",
    "value": "POWER_OF_ATTORNEY"
  },
  {
    "label": "Certidão de nascimento, casamento e óbito",
    "value": "BIRTH_MARRIAGE_DEATH_CERTIFICATE"
  }
]


export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AuthenticateDocumentFormData>({
    resolver: zodResolver(authenticateDocumentFormSchema),
  })


  async function handleAuthenticateDocument(hash: string) {
    try {
      const provider = new ethers.providers.JsonRpcProvider();
      const signer = provider.getSigner();
      const tokenContract = new ethers.Contract(websiteAddress, Contract.abi, signer);

      const encodedHash = Buffer.from(hash, 'hex');

      await tokenContract.storeHash(`0x${hash.toString()}`);

      const isHashStored = await tokenContract.verifyHash(encodedHash);

      console.log(isHashStored, 'Documento autenticado com sucesso, e validado na blockchain')
    } catch (error) {
      console.log(error)
      throw new Error();
    }
  }

  const [pdfFile, setPdfFile] = useState<File | null>(null);

  function handlePdfFileChange(event: ChangeEvent<HTMLInputElement>) {
    setPdfFile(event?.target?.files ? event?.target?.files[0] : null);
  }

  async function handleAuthenticate(data: AuthenticateDocumentFormData) {
    const formData = new FormData();


    const hash = await generateHash();

    handleAuthenticateDocument(hash).then(async () => {
      formData.append('pdfFile', pdfFile!);
      const response = await fetch(`/process-pdf/?hash=${hash}`, {
        method: 'POST',
        body: formData,
      });
      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      window.open(pdfUrl, '_blank');
    }).catch(error => window.alert("Ocorreu um erro ao validar o documento na blockchain"));

  };

  async function generateHash() {
    const buffer = await pdfFile!.arrayBuffer();
    const hash = createHash('sha256');
    hash.update(Buffer.from(buffer));
    const digest = hash.digest('hex');
    return digest;
  }

  return (
    <section className="p-6 flex flex-col flex-1 ">
      <h1 className="text-xl font-semibold ">Autenticar novo documento</h1>
      <p className="text-md font-normal">
        Selecione o documento que deseja autenticar, informe o tipo de
        documento e autentique o documento
      </p>

      <form onSubmit={handleSubmit(handleAuthenticate)} className="flex flex-col mt-8 gap-4 items-center">
        <Controller
          control={control}
          name="document_type"
          defaultValue='PROPERTY_DEED'
          render={({ field: { onChange, value } }) => (
            <div className="flex flex-col gap-4 w-64  ">
              <label htmlFor="document_type">Selecione o tipo de documento</label>
              <Select
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 8,
                  colors: {
                    ...theme.colors,
                    text: 'orangered',
                    primary25: '#fed7aa',
                    primary: '#f97316',
                  },
                })}
                value={documentTypes.filter(current => value?.includes(current.value))}
                onChange={item => onChange(item?.value)}
                options={documentTypes}
              />
              {errors.document_type && (
                <span className="text-sm text-red-500">
                  {errors.document_type.message}
                </span>
              )}
            </div>


          )}
        />

        <div className="flex flex-col gap-4 w-64  ">

          <label htmlFor="document">Selecione um documento</label>
          <input type="file"
            {...register('file')}
          />
          {errors.file && (
            <span className="text-sm text-red-500">

              {/* @ts-ignore */}
              {errors.file.message}
            </span>
          )}

        </div>


        <button
          className="border-none shadow rounded-md 
            text-bold w-fit py-2 px-4 bg-orange-400 text-white self-center mt-4"

        >
          Autenticar
        </button>
      </form>
    </section>
  )
}
