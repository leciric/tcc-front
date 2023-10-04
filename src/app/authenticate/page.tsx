import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/select'
import Image from 'next/image'

export default function Authenticate() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-y-3">
      <form className=" flex w-full flex-col gap-y-2 sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-6">
        <div className="flex max-w-[80%] flex-col gap-y-2 sm:gap-y-4">
          <h1 className="text-xl font-semibold">Autenticar documento</h1>
          <p>
            Aqui você consegue autenticar seus documentos apenas preenchendo o
            formulário a seguir, sem burocracias e sem precisar se locomover
            para outro lugar
          </p>

          <strong>
            Basta preencher os campos a seguir, e pronto seu documento já está
            autenticado!
          </strong>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="mt-6 flex flex-col gap-y-1 sm:mt-0">
            <label htmlFor="document-type" className="font-bold text-primary">
              Tipo de documento
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Tipo de documento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="contract">Contrato</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="document-type" className="font-bold text-primary">
              Tipo de documento
            </label>

            <div
              tabIndex={0}
              className="flex h-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-white"
            >
              <strong className="cursor-default text-base font-bold text-primary">
                Escolher arquivo
              </strong>
            </div>
          </div>

          <button className="mt-6 flex h-12 items-center justify-center rounded-lg bg-primary font-bold text-white">
            AUTENTICAR
          </button>
        </div>
      </form>

      <Image
        src="/autenticar.png"
        alt="Autenticar"
        width="500"
        height="500"
        className="mx-auto mt-5 w-full max-w-[500px]"
      ></Image>
    </div>
  )
}
