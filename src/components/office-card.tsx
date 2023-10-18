import Image from 'next/image'

export function OfficeCard() {
  return (
    <div className="rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <Image
        width="400"
        height="200"
        src="/office.png"
        alt="Homem ajoelhado gerenciando documentos"
        className="w-fit bg-cover"
      ></Image>
      <div className=" px-5 py-2">
        <strong className="text-lg">Cartório de Sorocaba</strong>
        <p className="w-[calc(95%)] truncate text-sm text-gray-900">
          <strong>CNPJ:</strong> 20.027.375/0001-52
        </p>

        <p className="w-[calc(95%)] truncate text-sm text-gray-900">
          <strong>Telefone:</strong> (15) 3300-0033
        </p>

        <button className="mt-6 flex h-12 w-full items-center justify-center rounded bg-primary font-bold text-white hover:bg-primary/90">
          Detalhes
        </button>
      </div>
    </div>
  )
}
