'use client'

import * as RadixAvatar from '@radix-ui/react-avatar'

interface AvatarProps {
  src?: string
}
export function Avatar({ src }: AvatarProps) {
  return (
    <RadixAvatar.Root className="inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full bg-black/70 align-middle">
      <RadixAvatar.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={
          src ||
          'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
        }
        alt="Pedro Duarte"
      />
      <RadixAvatar.Fallback
        className="flex h-full w-full items-center justify-center bg-white text-[15px] font-medium leading-3 text-primary"
        delayMs={600}
      >
        JD
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}
