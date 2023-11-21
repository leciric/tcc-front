'use client'
import { UserButton } from '@clerk/nextjs'
import { BellIcon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'
import { MobileMenu } from './mobile-menu'
import { SideBar } from './side-bar'
import { useQuery } from 'react-query'
import { api } from '@/services/api'
import Image from 'next/image'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { data } = useQuery({
    queryFn: async () => {
      const { data } = await api.get('/users/?email=lecirics@gmail.com')
      return data.user
    },
    queryKey: ['user', 'me'],
  })

  return (
    <div>
      <header className="fixed top-0 flex h-[100px] w-full items-center justify-between border-b border-b-gray-300 bg-white px-14 py-6 lg:ml-[320px] lg:w-[calc(100%-300px)] lg:justify-end">
        <SideBar></SideBar>
        <MobileMenu></MobileMenu>
        <div className="flex items-center justify-center gap-6">
          <input
            type="text"
            className="hidden rounded border border-gray-300 p-2 md:block"
            placeholder="Procurar"
          />

          <div className="flex items-center justify-center gap-1">
            <Image src="/coin.jpeg" alt="coin" width={32} height={32}></Image>

            {data?.coins_amount}
          </div>

          <button>
            <BellIcon className="h-6 w-6 text-slate-500"></BellIcon>
          </button>

          <UserButton afterSignOutUrl="/sign-in"></UserButton>
        </div>
      </header>
      <main className="mt-[100px] overflow-hidden overflow-y-auto p-8 lg:ml-[320px]">
        {children}
      </main>
    </div>
  )
}
