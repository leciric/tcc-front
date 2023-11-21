'use client'

import { Document } from '@/components/document'
import { Layout } from '@/components/layout'
import { api } from '@/services/api'
import { useQuery } from 'react-query'

interface DocumentDTO {
  id: string
  file_name: string
  hash_id: string
  owner_id: string
  url: string
  created_at: string
  updated_at: string
}

export default function MyDocuments() {
  const { data } = useQuery({
    queryKey: ['user', 'documents'],
    queryFn: async () => {
      const { data }: { data: { documents: DocumentDTO[] } } = await api.get(
        '/documents/owner',
      )

      return data
    },
  })

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        {data?.documents.length === 0 && (
          <strong>Você ainda não autenticou nenhum documento</strong>
        )}

        {data?.documents.map((document) => (
          <Document
            key={document.id}
            file_name={document.file_name}
            created_at={new Date(document.created_at)}
            hash={document.hash_id}
            url={document.url}
          ></Document>
        ))}
      </div>
    </Layout>
  )
}
