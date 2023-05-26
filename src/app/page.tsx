'use client'
import { Sidebar } from '@/components/Sidebar'
import Image from 'next/image'
import Contract from '../../artifacts/contracts/DocumentAuthentication.sol/DocumentAuthentication.json'
import { websiteAddress } from '@/shared/config'
import { ethers } from 'ethers'
import { ChangeEvent, FormEvent, useState } from 'react'
import { createHash } from 'crypto'
import { ToastContainer, toast } from 'react-toastify'

export default function Home() {
  async function handleAuthenticateDocument(hash: string) {
    try {
      const provider = new ethers.providers.JsonRpcProvider()
      const signer = provider.getSigner()
      const tokenContract = new ethers.Contract(
        websiteAddress,
        Contract.abi,
        signer,
      )

      const encodedHash = Buffer.from(hash, 'hex')

      await tokenContract.storeHash(`0x${hash.toString()}`)

      const isHashStored = await tokenContract.verifyHash(encodedHash)

      console.log(isHashStored)
    } catch (error) {
      throw new Error()
    }
  }

  const [pdfFile, setPdfFile] = useState<File | null>(null)

  function handlePdfFileChange(event: ChangeEvent<HTMLInputElement>) {
    setPdfFile(event?.target?.files ? event?.target?.files[0] : null)
  }

  async function handleSubmit(event: FormEvent) {
    try {
      event.preventDefault()
      const formData = new FormData()

      const hash = await generateHash()

      await handleAuthenticateDocument(hash)
      formData.append('pdfFile', pdfFile!)
      const response = await fetch(`/process-pdf/?hash=${hash}`, {
        method: 'POST',
        body: formData,
      })
      const pdfBlob = await response.blob()
      const pdfUrl = URL.createObjectURL(pdfBlob)
      window.open(pdfUrl, '_blank')
      toast.success('Documento autenticado com Sucesso!')
    } catch {
      toast.error('Ocorreu um erro ao autenticador o documento!')
    }
  }

  async function generateHash() {
    const buffer = await pdfFile!.arrayBuffer()
    const hash = createHash('sha256')
    hash.update(Buffer.from(buffer))
    const digest = hash.digest('hex')
    return digest
  }

  return (
    <main className="flex flex-row bg-slate-100">
      <Sidebar></Sidebar>
      <div className="w-full h-screen ">
        <header className="px-2 py-3 flex justify-end items-center shadow-md bg-white">
          <span className="mr-3">Olá José</span>
          <Image
            src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="User"
            width="256"
            height="256"
            className="rounded-full w-12 h-12 object-cover shadow border-2 border-black"
          ></Image>
        </header>
        <section className="p-6 flex flex-col flex-1 ">
          <h1 className="text-xl font-semibold ">Autenticar novo documento</h1>
          <p className="text-md font-normal">
            Selecione o documento que deseja autenticar, informe o tipo de
            documento e autentique o documento
          </p>

          <form className="flex flex-col mt-8 gap-4 items-start">
            <div className="flex flex-col gap-1 w-64">
              <label htmlFor="document">Selecione um documento</label>
              <input type="file" onChange={handlePdfFileChange} />
            </div>

            <div className="flex flex-col gap-1 w-64">
              <label htmlFor="type">Tipo de documento</label>
              <input type="text" className="w-full h-12" />
            </div>

            <button
              className="border-none shadow rounded-md 
            text-bold w-fit py-2 px-4 bg-orange-400 text-white self-center mt-4"
              onClick={handleSubmit}
            >
              Autenticar
            </button>
          </form>
        </section>
      </div>
      <ToastContainer />
    </main>
  )
}
