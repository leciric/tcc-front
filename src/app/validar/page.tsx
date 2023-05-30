'use client'
import Contract from '../../../artifacts/contracts/DocumentAuthentication.sol/DocumentAuthentication.json'
import { websiteAddress } from '@/shared/config'
import { ethers } from 'ethers'
import { createHash } from 'crypto'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'

import { MinusCircle, CheckCircle, XCircle } from 'phosphor-react'

import { useState } from 'react'

const authenticateDocumentFormSchema = z.object({
  hash: z.string().nonempty('O hash do documento é obrigatório'),
  file: z
    .any()
    .transform((list) => list.item(0)!)
    .refine((file) => file?.length !== 1, 'O documento é obrigatório')
    .refine(
      (file) => file?.size <= 1024 * 1024,
      'O arquivo precisa ter no máximo 5Mb',
    ),
})

type AuthenticateDocumentFormData = z.infer<
  typeof authenticateDocumentFormSchema
>

export default function ValidateDocument() {
  const [documentStatus, setDocumentStatus] = useState<
    'valid' | 'invalid' | null
  >(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm<AuthenticateDocumentFormData>({
    resolver: zodResolver(authenticateDocumentFormSchema),
  })

  async function handleValidateDocument(hash: string): Promise<boolean> {
    try {
      const provider = new ethers.providers.JsonRpcProvider()
      const signer = provider.getSigner()
      const tokenContract = new ethers.Contract(
        websiteAddress,
        Contract.abi,
        signer,
      )

      const encodedHash = Buffer.from(hash, 'hex')

      const isHashValid = await tokenContract.verifyHash(encodedHash)

      return !!isHashValid
    } catch (error) {
      // @ts-ignore
      if (error?.stack?.includes('Hash already stored')) {
        toast.error('Documento já autenticado')
      }
      throw new Error()
    }
  }

  async function handleAuthenticate(data: AuthenticateDocumentFormData) {
    try {
      const hash = await generateHash(data.file!)

      const isFileHashValid = await handleValidateDocument(hash)

      const isHashValid = isFileHashValid ? hash === data.hash : false

      setDocumentStatus(isHashValid ? 'valid' : 'invalid')

      // reset()
    } catch (error) {
      // @ts-ignore
      if (!error?.stack?.includes('handleAuthenticateDocument')) {
        toast.error('Ocorreu um erro ao autenticador o documento!')
      }
    }
  }

  async function generateHash(file: any) {
    const buffer = await file!.arrayBuffer()
    const hash = createHash('sha256')
    hash.update(Buffer.from(buffer))
    const digest = hash.digest('hex')
    return digest
  }

  return (
    <section className="p-6 flex flex-col flex-1 ">
      <h1 className="text-xl font-semibold ">Validar hash de um documento</h1>
      <p className="text-md font-normal">
        Selecione o documento que deseja validar, informe o hash e verifique a
        validade desse documento
      </p>

      <form
        onSubmit={handleSubmit(handleAuthenticate)}
        className="flex flex-col mt-8 gap-4 items-center"
      >
        <div className="flex flex-col gap-4 w-64  ">
          <label htmlFor="document">Selecione um documento</label>
          <input
            type="text"
            className="rounded-md border border-gray-300 h-10 outline-none p-1"
            {...register('hash')}
          />
          {errors.file && (
            <span className="text-sm text-red-500">
              {/* @ts-ignore */}
              {errors.file.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4 w-64  ">
          <label htmlFor="document">Selecione um documento</label>
          <input type="file" {...register('file')} />
          {errors.file && (
            <span className="text-sm text-red-500">
              {/* @ts-ignore */}
              {errors.file.message}
            </span>
          )}
        </div>

        <button
          className="border-none shadow rounded-md 
            text-bold w-fit py-2 px-4 bg-orange-500 text-white self-center mt-4 hover:bg-orange-600"
        >
          Validar
        </button>
      </form>

      {documentStatus === 'valid' && (
        <div className="flex flex-col items-center justify-center mt-12">
          <CheckCircle weight="regular" size={64} />

          <h1 className="text-xl font-semibold mt-4">Documento validado</h1>
          <p className="text-center">
            O hash enviado foi gerado a partir do documento enviado,
            <br />e este documento não sofreu alterações
          </p>
        </div>
      )}
      {documentStatus === 'invalid' && (
        <div className="flex flex-col items-center justify-center mt-12">
          <XCircle weight="regular" size={64} />

          <h1 className="text-xl font-semibold mt-4">Documento invalido</h1>
          <p>O hash enviado não foi gerado a partir do documento enviado</p>
          <p>
            Este documento pode ter sofrido alterações ou ser um documento
            completamente diferente
          </p>
        </div>
      )}

      {!documentStatus && (
        <div className="flex flex-col items-center justify-center mt-12">
          <MinusCircle weight="regular" size={64} />

          <h1 className="text-xl font-semibold mt-4">
            O resultado da validação irá aparecer aqui
          </h1>
        </div>
      )}

      <ToastContainer />
    </section>
  )
}
