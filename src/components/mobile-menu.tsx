'use client'

import { Bars3Icon } from '@heroicons/react/24/outline'
import * as Dialog from '@radix-ui/react-dialog'
import { MenuContent } from './menu-content'

export function MobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="lg:hidden">
        <Bars3Icon className="h-8 w-8 text-black"></Bars3Icon>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-0 top-0  h-screen w-[320px] bg-white px-8 py-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <MenuContent></MenuContent>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
