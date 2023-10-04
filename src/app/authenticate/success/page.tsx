import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export default function Success() {
  return (
    <div className="mx-auto max-w-[600px]">
      <CheckBadgeIcon className="text-green-600"></CheckBadgeIcon>

      <h1>Documento autenticado com sucesso!</h1>
      <p>Seu documento gerou o seguinte código:</p>

      <div className="flex h-14 items-center justify-between rounded-lg border border-primary ">
        <strong className="p-2 ">
          E3B0C44298FC1C149AFBF4C8996FB92427AE41E4
        </strong>

        <div className="h-full w-full bg-primary p-2">Copiar</div>
      </div>
    </div>
  )
}
