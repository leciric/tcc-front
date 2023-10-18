import {
  BuildingOffice2Icon,
  DocumentTextIcon,
  HomeIcon,
  PlusIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export function MenuContent() {
  return (
    <div>
      <div className="flex flex-row items-center gap-x-3">
        <SparklesIcon className="h-12 w-12 rounded-full text-primary"></SparklesIcon>
        <p className="text-xl font-bold capitalize">DocGuard</p>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <Link href="/my-documents" passHref>
          <nav
            tabIndex={0}
            className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
          >
            <HomeIcon className="h-6 w-6"></HomeIcon>
            <p className="text-base ">Meus documentos</p>
          </nav>
        </Link>

        <Link href="/manage/offices" passHref>
          <nav
            tabIndex={0}
            className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
          >
            <BuildingOffice2Icon className="h-6 w-6"></BuildingOffice2Icon>
            <p className="text-base ">Cartórios cadastrados</p>
          </nav>
        </Link>

        <Link href="/manage/offices/add" passHref>
          <nav
            tabIndex={0}
            className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
          >
            <PlusIcon className="h-6 w-6"></PlusIcon>
            <p className="text-base ">Cadastrar cartório</p>
          </nav>
        </Link>

        <Link
          href="/authenticate"
          passHref
          tabIndex={0}
          className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
        >
          <DocumentTextIcon className="h-6 w-6"></DocumentTextIcon>
          <p className="text-base ">Autenticar documento</p>
        </Link>

        <nav
          tabIndex={0}
          className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
        >
          <DocumentTextIcon className="h-6 w-6"></DocumentTextIcon>
          <p className="text-base ">Validar autenticação do documento</p>
        </nav>
      </div>
    </div>
  )
}
