'use client'
import {
  BanknotesIcon,
  Bars3Icon,
  HomeIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Logo } from './logo'

import * as Dialog from '@radix-ui/react-dialog'

export function PublicMobileMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="lg:hidden">
        <Bars3Icon className="h-8 w-8 text-black"></Bars3Icon>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="fixed left-0 top-0 z-20 h-screen w-screen bg-white px-8 py-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          <div>
            <div className="flex w-full flex-row justify-between">
              <Logo></Logo>
              <Dialog.Close>
                <XMarkIcon className="h-8 w-8 text-black"></XMarkIcon>
              </Dialog.Close>
            </div>
            <div className="mt-12 flex flex-col gap-6">
              <Link href="/my-documents" passHref>
                <nav className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100">
                  <HomeIcon className="h-6 w-6"></HomeIcon>
                  <p className="text-base ">Inicio</p>
                </nav>
              </Link>

              <Link href="/manage/offices" passHref>
                <nav className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100">
                  <ShoppingBagIcon className="h-6 w-6"></ShoppingBagIcon>
                  <p className="text-base ">Produtos</p>
                </nav>
              </Link>

              <Link href="/manage/offices/add" passHref>
                <nav className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100">
                  <BanknotesIcon className="h-6 w-6"></BanknotesIcon>
                  <p className="text-base ">Preço</p>
                </nav>
              </Link>

              <Link
                href="/authenticate"
                passHref
                className="flex w-full cursor-pointer flex-row gap-4 rounded-md p-4 hover:bg-neutral-100"
              >
                <UserCircleIcon className="h-6 w-6"></UserCircleIcon>
                <p className="text-base">Sobre nós</p>
              </Link>
            </div>
          </div>
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
