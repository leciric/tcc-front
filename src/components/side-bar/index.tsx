'use client'

export function SideBar() {
  return (
    <aside className="fixed left-0 top-0 z-10 hidden h-full w-[300px] max-w-xs flex-col border-r border-r-gray-300 bg-white px-8 py-12 transition-all group-data-[opened=true]:block lg:flex">
      <div className="flex flex-row items-center gap-x-3">
        <div className="h-12 w-12 rounded-full bg-primary"></div>
        <p className="text-xl font-bold capitalize">DocGuard</p>
      </div>

      <div className="mt-12 flex flex-col gap-6">
        <nav
          tabIndex={0}
          className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
        >
          <div className="h-6 w-6 rounded-full bg-gray-900"></div>
          <p className="text-base ">Meus documentos</p>
        </nav>

        <nav
          tabIndex={0}
          className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
        >
          <div className="h-6 w-6 rounded-full bg-gray-900"></div>
          <p className="text-base ">Autenticar documento</p>
        </nav>
      </div>
    </aside>
  )
}
