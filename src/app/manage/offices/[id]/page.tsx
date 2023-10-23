import { Layout } from '@/components/layout'
import Image from 'next/image'

export default function Office() {
  return (
    <Layout>
      <main>
        <header className="flex flex-col items-center justify-center gap-16 sm:flex-row">
          <Image
            src="/office.png"
            width={400}
            height={400}
            alt="Homem ajoelhado gerenciando documentos"
          ></Image>

          <div className="flex flex-col gap-8">
            <h1 className="text-3xl font-bold text-[#4B4B4B]">
              Cartório de Sorocaba
            </h1>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:gap-0">
                <span className="w-fit text-base text-secondary sm:w-32">
                  CNPJ
                </span>
                <p className="text-base text-[#4B4B4B]">20.027.375/0001-52 </p>
              </div>
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:gap-0">
                <span className="w-fit text-base text-secondary sm:w-32">
                  Telefone
                </span>
                <p className="text-base text-[#4B4B4B]">(15) 3300-0033</p>
              </div>
              <div className="flex flex-col items-start gap-1 sm:flex-row sm:gap-0">
                <span className="w-fit text-base text-secondary sm:w-32">
                  Endereço
                </span>
                <p className="text-base text-[#4B4B4B]">
                  Rua das amarelinhas, 123, Vila azul, Sorocaba - SP, Brasil
                </p>
              </div>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}
