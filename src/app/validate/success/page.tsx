import { Layout } from '@/components/layout'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Success() {
  return (
    <Layout>
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-y-3">
        <CheckBadgeIcon className="h-40 w-40 text-success"></CheckBadgeIcon>

        <h1 className="text-2xl font-semibold text-secondary">
          Documento validado com sucesso!
        </h1>
        <p className="text-lg text-secondary">
          O documento e o hash enviado correspondem ao mesmo arquivo e não houve
          nenhuma modificação!
        </p>

        <p className="text-center text-lg text-secondary">
          O hash enviado foi validado com base no documento submetido, e esse
          documento não passou por nenhuma modificação.
        </p>

        <Image
          src="/success.png"
          alt="Duas pessoas se cumprimentando"
          width={400}
          height={600}
        ></Image>
      </div>
    </Layout>
  )
}
