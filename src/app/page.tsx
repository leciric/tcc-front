import { Sidebar } from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
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
              <input type="file" />
            </div>

            <div className="flex flex-col gap-1 w-64">
              <label htmlFor="type">Tipo de documento</label>
              <input type="text" />
            </div>

            <button
              className="border-none shadow rounded-md 
            text-bold w-fit py-2 px-4 bg-orange-400 text-white self-center mt-4"
            >
              Autenticar
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
