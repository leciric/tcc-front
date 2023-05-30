'use client'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify'

import { Key, Timer } from 'phosphor-react'

export function DocumentCard() {
  return (
    <div className="border rounded-md shadow-xl bg-white w-fit cursor-pointer hover:shadow-2xl text-clip overflow-hidden">
      <Image
        src="/document.jpg"
        alt="Document visualization"
        width="500"
        height="500"
        className="max-h-32 object-cover rounded-t-md"
      ></Image>

      <div className="p-4">
        <h3 className="font-bold">Documento XPTO</h3>

        <p className="flex items-center">
          <Key size={16} color="#333" className="mr-1"></Key>{' '}
          <span
            className="text-ellipsis overflow-hidden w-64"
            onClick={() => {
              navigator.clipboard.writeText(
                'f55da92095f0b30016a3f35d84a181ca217e5f0b98b0db302a09e8f646ac7579',
              )
              toast('Hash copiado para a área de transferência')
            }}
          >
            f55da92095f0b30016a3f35d84a181ca217e5f0b98b0db302a09e8f646ac7579
          </span>
        </p>

        <span className="flex items-center text-gray-700">
          <Timer size={16} color="#333" className="mr-1"></Timer> 30 de maio de
          2023 as 19:07
        </span>
      </div>

      <ToastContainer />
    </div>
  )
}
