'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { CheckCircle } from 'phosphor-react'
// import { useEffect } from 'react'

export default function Success() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const hash = searchParams.get('hash')

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     router.push('/meus-documentos')
  //   }, 10000)

  //   return () => clearTimeout(timeout)
  // }, [router])

  return (
    <section className="p-6 flex flex-col flex-1 items-center justify-center h-3/5">
      <CheckCircle weight="thin" size={128} />
      <h1 className="font-bold text-2xl ">
        Documento autenticado com sucesso!
      </h1>

      <p className="mt-4">Seu documento gerou o seguinte código: </p>
      <p className="font-bold text-lg">{hash}</p>
      <span className="text-center text-sm mt-4">
        Esse código é único e serve para validar a <br />{' '}
        <span className="underline ">autenticidade</span>e{' '}
        <span className="underline ">imutabilidade</span> do seu documento.
      </span>

      {/* <p className="text-center mt-4 text-xs">
        Você está sendo redirecionado automaticamente para os seus documentos
      </p> */}

      <button
        className="border-none shadow rounded-md 
            text-bold w-fit py-2 px-4 bg-orange-500 text-white self-center mt-4 hover:bg-orange-600"
        onClick={() => router.push('meus-documentos')}
      >
        Meus documentos
      </button>
    </section>
  )
}
