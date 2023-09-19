import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import '../globals.css'

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
      <body>
        <header></header>

        <aside></aside>

        <div>{children}</div>
      </body>
    </html>
  )
}
