import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

import { MobileMenu } from '@/components/mobile-menu'
import { SideBar } from '@/components/side-bar'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = cookies().get('doc-guard.token')?.value

  if (!token) {
    return redirect('/login')
  }

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div>
          <header className="fixed top-0 flex h-[100px] w-full items-center justify-between border-b border-b-gray-300 bg-white px-10 py-6 lg:ml-[300px] lg:w-[calc(100%-300px)] lg:justify-end">
            <SideBar></SideBar>
            <MobileMenu></MobileMenu>
            <div className="flex items-center justify-center gap-4">
              <div className="h-8 w-8 rounded-full bg-slate-500"></div>

              <div className="h-12 w-12 rounded-full bg-black"></div>
            </div>
          </header>
          <main className="mt-[100px] overflow-y-auto p-8 lg:ml-[300px]">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
