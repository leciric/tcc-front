'use client'

import { MenuContent } from './menu-content'

export function SideBar() {
  return (
    <aside className="fixed left-0 top-0 z-10 hidden h-full w-[320px] max-w-xs flex-col border-r border-r-gray-300 bg-white px-8 py-12 transition-all group-data-[opened=true]:block lg:flex">
      <MenuContent></MenuContent>
    </aside>
  )
}
