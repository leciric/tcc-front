'use client'

import { toast } from 'react-toastify'

interface HashViewerProps {
  hash: string
}

export function HashViewer({ hash }: HashViewerProps) {
  function handleCopyHash() {
    navigator.clipboard.writeText(hash)

    toast.success('Hash copiado com sucesso!')
  }
  return (
    <button
      onClick={handleCopyHash}
      className="flex h-full w-full items-center justify-center bg-primary p-2"
    >
      <span className="text-lg font-bold text-white">Copiar</span>
    </button>
  )
}
