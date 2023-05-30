'use client'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
interface NavigationItemProps {
  to?: string
  children: ReactNode
}

export function NavigationItem({ to, children }: NavigationItemProps) {
  const router = useRouter()
  return (
    <nav
      className="cursor-pointer text-white hover:text-gray-700"
      onClick={() => (to ? router.push(to) : null)}
    >
      {children}
    </nav>
  )
}
