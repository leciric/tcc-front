/* eslint-disable camelcase */
import Image from 'next/image'

interface DocumentProps {
  hash?: string
  file_name?: string
  url?: string
  created_at?: Date
}

export function Document({ created_at, file_name, hash, url }: DocumentProps) {
  return (
    <div className="cursor-pointer rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <Image
        width="400"
        height="200"
        src="/doc-image.png"
        alt="Document item"
        className="w-fit bg-cover"
      ></Image>
      <div className="px-5 py-2">
        <strong className="w-4/5 overflow-hidden truncate text-sm">
          {file_name}
        </strong>
        <p className="w-[calc(95%)] truncate text-sm text-gray-900">{hash}</p>
        <time className="w-[calc(95%)] truncate text-sm text-gray-700">
          {created_at?.toLocaleDateString('pt-BR')}
        </time>
      </div>
    </div>
  )
}
