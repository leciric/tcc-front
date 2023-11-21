import { HashViewer } from '@/components/hash-viewer'
import { Layout } from '@/components/layout'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Success({ params }: { params: { hash: string } }) {
  const hash = params.hash

  return (
    <Layout>
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-y-3">
        <CheckBadgeIcon className="h-40 w-40 text-success"></CheckBadgeIcon>

        <h1 className="text-2xl font-semibold text-secondary">
          Documento autenticado com sucesso!
        </h1>
        <p className="text-lg text-secondary">
          Seu documento gerou o seguinte código:
        </p>

        <div className="flex h-14 items-center justify-between rounded-lg border border-primary ">
          <strong className="p-2 text-secondary">{hash}</strong>

          <HashViewer hash={hash}></HashViewer>
        </div>

        <p className="text-center text-lg text-secondary">
          O hash enviado foi criado com base no documento submetido, e esse
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
