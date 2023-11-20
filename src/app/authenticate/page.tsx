'use client'

import { Layout } from '@/components/layout'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select'
import { createHash } from 'crypto'
import Image from 'next/image'

import { ChangeEvent, useState } from 'react'

export default function Authenticate() {
  const [pdfFile, setPdfFile] = useState<File | null>(null)

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

  async function handleSubmit() {
    const hash = await generateHash()

    console.log(hash)
  }
  return (
    <Layout>
      <div className="mx-auto mt-4 flex max-w-5xl flex-col gap-y-3">
        <form className=" flex w-full flex-col gap-y-2 sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-6">
          <div className="flex max-w-[80%] flex-col gap-y-2 sm:gap-y-4">
            <h1 className="text-xl font-semibold text-secondary">
              Autenticar documento
            </h1>
            <p className="text-secondary">
              Aqui você consegue autenticar seus documentos apenas preenchendo o
              formulário a seguir, sem burocracias e sem precisar se locomover
              para outro lugar
            </p>

            <strong className="text-secondary">
              Basta preencher os campos a seguir, e pronto seu documento já está
              autenticado!
            </strong>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="mt-6 flex flex-col gap-y-1 sm:mt-0">
              <label htmlFor="document-type" className="font-bold text-primary">
                Tipo de documento
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Tipo de documento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contract">Contrato</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-y-1">
              <label htmlFor="document-type" className="font-bold text-primary">
                Tipo de documento
              </label>

              <input type="file" onChange={handlePdfFileChange} />

              <div
                tabIndex={0}
                className="flex h-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-white"
              >
                <strong className="cursor-default text-base font-bold text-primary">
                  Escolher arquivo
                </strong>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              type="button"
              className="mt-6 flex h-12 items-center justify-center rounded-lg bg-primary font-bold text-white"
            >
              AUTENTICAR
            </button>
          </div>
        </form>

        <Image
          src="/autenticar.png"
          alt="Autenticar"
          width="500"
          height="500"
          className="mx-auto mt-5 w-full max-w-[500px]"
        ></Image>
      </div>
    </Layout>
  )
}
