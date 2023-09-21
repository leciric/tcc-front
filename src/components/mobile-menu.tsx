'use client'

import * as Dialog from '@radix-ui/react-dialog'

export function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="lg:hidden">MENU</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-0 top-0  h-screen w-[300px] bg-white px-8 py-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
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

            <nav className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100">
              <div className="h-6 w-6 rounded-full bg-gray-900"></div>
              <p className="text-base ">Autenticar documento</p>
            </nav>
          </div>

          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
