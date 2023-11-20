'use client'

import { Document } from '@/components/document'
import { Layout } from '@/components/layout'
import { useAuth } from '@clerk/nextjs'
import { useEffect } from 'react'

export default function MyDocuments() {
  const { getToken } = useAuth()

  useEffect(() => {
    async function handleGetToken() {
      console.log(await getToken())
    }

    handleGetToken()
  }, [getToken])
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        <Document></Document>
        <Document></Document>
        <Document></Document>
        <Document></Document>
      </div>
    </Layout>
  )
}
