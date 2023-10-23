import { PublicLayout } from '@/components/public-layout'
import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <PublicLayout>
      <main className="flex  items-start justify-center">
        <div className="absolute top-[100px] h-2/5 w-screen bg-primary"></div>
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start">
          <div className="flex flex-col items-start justify-around xl:flex-row">
            <div className="z-10 mt-10 flex w-full flex-col pl-6 xl:w-1/2">
              <h1 className="text-3xl font-bold text-white">Cadastre-se</h1>
              <strong className="mt-3 text-2xl font-semibold text-white">
                Protegendo o seu mundo, um documento de cada vez.
              </strong>
              <p className="mt-4 text-lg text-white ">
                A segurança de seus documentos está a um clique de distância.
              </p>
            </div>
            <Image
              className="z-10  hidden h-[360px] w-[360px] lg:block"
              src="/security-home.png"
              alt="Cadeado com homem em pé com braços cruzados"
              width={500}
              height={500}
            ></Image>
          </div>
          <div className="mt-4 lg:mt-16">
            <SignUp />
          </div>
        </div>
      </main>
    </PublicLayout>
  )
}
