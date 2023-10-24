'use client'
import { ReactNode } from 'react'
import { Logo } from './logo'
import { PublicMobileMenu } from './public-mobile-menu'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export function PublicLayout({ children }: LayoutProps) {
  return (
    <>
      <header className="fixed top-0 flex w-full flex-row items-center justify-between border-b border-b-gray-300 bg-white p-6 md:flex-row md:px-14 lg:h-[100px]">
        <Logo></Logo>

        <PublicMobileMenu></PublicMobileMenu>

        <div className="hidden items-center  gap-8 md:mt-0 lg:grid lg:grid-cols-4">
          <nav className="cursor-pointer text-center hover:text-primary">
            Inicio
          </nav>
          <nav className="cursor-pointer text-center hover:text-primary">
            Produtos
          </nav>
          <nav className="cursor-pointer text-center hover:text-primary">
            Preço
          </nav>
          <Link href="/politica-de-privacidade">
            <nav className="cursor-pointer text-center hover:text-primary">
              Politica de privacidade
            </nav>
          </Link>
        </div>
        <div className="hidden items-center justify-center gap-6 lg:flex">
          <input
            type="text"
            className="hidden rounded border border-gray-300 p-2 md:block"
            placeholder="Procurar"
          />
        </div>
      </header>
      <main className="mt-[100px] h-[calc(100vh-100px)] overflow-hidden overflow-y-auto p-8 ">
        {children}
      </main>
    </>
  )
}
