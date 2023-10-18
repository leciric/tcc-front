import { Layout } from '@/components/layout'
import { XCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Error({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const pageType: 'auth' | 'verify' = searchParams.type as 'auth' | 'verify'

  return (
    <Layout>
      <div className="mx-auto flex max-w-[600px] flex-col items-center gap-y-3">
        <XCircleIcon className="h-40 w-40 text-[#FD6D6D]"></XCircleIcon>

        <h1 className="text-2xl font-semibold text-secondary">
          {pageType === 'auth'
            ? 'Documento não pôde ser autenticado!'
            : 'Documento não pôde ser validado!'}
        </h1>
        <p className="text-center text-lg text-secondary">
          {pageType === 'auth'
            ? 'Por favor, assegure-se de que o arquivo submetido não foi corrompido e que está acessível. Em seguida, tente novamente.'
            : 'O arquivo submetido foi modificado e, portanto, não pode ser validado. Verifique se este é o arquivo correto e tente novamente.'}
        </p>

        <Image
          src={pageType === 'auth' ? '/error.jpeg' : '/error-verify.jpeg'}
          alt="Duas pessoas se cumprimentando"
          width={400}
          height={600}
        ></Image>
      </div>
    </Layout>
  )
}
