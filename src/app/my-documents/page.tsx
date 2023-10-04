import { Document } from '@/components/document'
import { Layout } from '@/components/layout'

export default function MyDocuments() {
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
