import Image from 'next/image'

export function Document() {
  return (
    <div className="cursor-pointer rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <Image
        width="400"
        height="200"
        src="/doc-image.png"
        alt="Document item"
        className="w-fit bg-cover"
      ></Image>
      <div className=" px-5 py-2">
        <strong className="text-lg">NDA Vivo</strong>
        <p className="w-[calc(95%)] truncate text-sm text-gray-900">
          45447744FBA0D9B2F21F088E6CD3B
        </p>
        <time className="w-[calc(95%)] truncate text-sm text-gray-700">
          30 de maio de 2023 às 20h45
        </time>
      </div>
    </div>
  )
}
