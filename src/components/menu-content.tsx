import {
  DocumentTextIcon,
  HomeIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

export function MenuContent() {
  return (
    <div>
      <div className="flex flex-row items-center gap-x-3">
        <SparklesIcon className="h-12 w-12 rounded-full text-primary"></SparklesIcon>
        <p className="text-xl font-bold capitalize">DocGuard</p>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <nav
          tabIndex={0}
          className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
        >
          <HomeIcon className="h-6 w-6"></HomeIcon>
          <p className="text-base ">Meus documentos</p>
        </nav>

        <nav
          tabIndex={0}
          className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
        >
          <DocumentTextIcon className="h-6 w-6"></DocumentTextIcon>
          <p className="text-base ">Autenticar documento</p>
        </nav>
      </div>
    </div>
  )
}
