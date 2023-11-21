'use client'
import { ptBR } from '@clerk/localizations'
import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

interface ProvidersProps {
  children: ReactNode
}
export function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient()

  return (
    <ClerkProvider localization={ptBR}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <ToastContainer />
    </ClerkProvider>
  )
}
