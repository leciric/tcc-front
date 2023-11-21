'use client'
import { useRouter } from 'next/navigation'
import { Layout } from '@/components/layout'

import { api } from '@/services/api'
import { createHash } from 'crypto'
import Image from 'next/image'

import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'

export default function Authenticate() {
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [currentHash, setCurrentHash] = useState('')

  function handlePdfFileChange(event: ChangeEvent<HTMLInputElement>) {
    setPdfFile(event?.target?.files ? event?.target?.files[0] : null)
  }

  async function generateHash() {
    const buffer = await pdfFile!.arrayBuffer()
    const hash = createHash('sha256')
    hash.update(Buffer.from(buffer))
    const digest = hash.digest('hex')
    return digest
  }

  const router = useRouter()

  async function handleSubmit() {
    try {
      const hash = await generateHash()

      if (hash === currentHash) {
        const response = await api.get<{
          isValid: boolean
        }>(`/documents/validate/${hash}`)

        if (response.data.isValid) {
          toast.success('Documento validado com sucesso!')
          router.push(`/validate/success`)
        } else {
          toast.error(
            'Documento não encontrado em nossos registros na blockchain',
          )
        }
      } else {
        toast.error('Documento enviado não coincide com o hash fornecido')
      }
    } catch (error) {
      router.push(`/authenticate/error?type=auth`)

      toast.error('Ocorreu um erro ao fazer a validação')
    }
  }
  return (
    <Layout>
      <div className="mx-auto mt-4 flex max-w-5xl flex-col gap-y-3">
        <form className=" flex w-full flex-col gap-y-2 sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-6">
          <div className="flex max-w-[80%] flex-col gap-y-2 sm:gap-y-4">
            <h1 className="text-xl font-semibold text-secondary">
              Validar documento
            </h1>
            <p className="text-secondary">
              Aqui você consegue validar a autenticação de seus documentos
              apenas preenchendo o formulário a seguir.
            </p>

            <strong className="text-secondary">
              Basta preencher os campos a seguir, e pronto seu documento já está
              validado!
            </strong>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="document-picker"
                className=" cursor-pointer text-base font-bold text-primary"
              >
                Hash do arquivo
              </label>
              <input
                type="text"
                placeholder="Digite o hash do arquivo aqui"
                className="flex h-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-white p-3"
                onChange={(event) => setCurrentHash(event.target.value)}
              />

              <label htmlFor="document-type" className="font-bold text-primary">
                Documento
              </label>

              <input
                type="file"
                className="sr-only"
                id="document-picker"
                onChange={handlePdfFileChange}
              />

              <div className="flex h-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-white">
                <label
                  tabIndex={0}
                  htmlFor="document-picker"
                  className=" cursor-pointer text-base font-bold text-primary"
                >
                  Escolher arquivo
                </label>
              </div>

              <span className="">{pdfFile?.name}</span>
            </div>

            <div>
              <div className="flex items-center gap-1">
                <Image
                  src="/coin.jpeg"
                  alt="coin"
                  width={64}
                  height={64}
                ></Image>
                <span className=" text-xl font-bold text-primary">2</span>
              </div>
              <span className=" text-sm font-bold text-primary">
                Este processo irá custar a quantidade de moedas acima
              </span>
            </div>

            <button
              onClick={handleSubmit}
              type="button"
              className="mt-6 flex h-12 items-center justify-center rounded-lg bg-primary font-bold text-white"
            >
              VALIDAR
            </button>
          </div>
        </form>

        <Image
          src="/autenticar.png"
          alt="Validar"
          width="500"
          height="500"
          className="mx-auto mt-5 w-full max-w-[500px]"
        ></Image>
      </div>
    </Layout>
  )
}
