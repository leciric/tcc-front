import { ReactNode } from 'react'

interface NavigationItemProps {
  children: ReactNode
}

export function NavigationItem({ children }: NavigationItemProps) {
  return (
    <nav className="cursor-pointer text-white hover:text-gray-700">
      {children}
    </nav>
  )
}
