import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

import { Avatar } from '@/components/avatar'
import { MobileMenu } from '@/components/mobile-menu'
import { SideBar } from '@/components/side-bar'
import { BellIcon } from '@radix-ui/react-icons'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = cookies().get('doc-guard.token')?.value

  if (token) {
    return redirect('/login')
  }

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div>
          <header className="fixed top-0 flex h-[100px] w-full items-center justify-between border-b border-b-gray-300 bg-white px-14 py-6 lg:ml-[320px] lg:w-[calc(100%-300px)] lg:justify-end">
            <SideBar></SideBar>
            <MobileMenu></MobileMenu>
            <div className="flex items-center justify-center gap-6">
              <input
                type="text"
                className="rounded border border-gray-300 p-2"
                placeholder="Procurar"
              />

              <button>
                <BellIcon className="h-6 w-6 text-slate-500"></BellIcon>
              </button>

              <button>
                <Avatar></Avatar>
              </button>
            </div>
          </header>
          <main className="mt-[100px] overflow-hidden overflow-y-auto p-8 lg:ml-[320px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
