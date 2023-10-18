import { Layout } from '@/components/layout'
import { OfficeCard } from '@/components/office-card'

export default function Offices() {
  return (
    <Layout>
      <main className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        <OfficeCard></OfficeCard>
        <OfficeCard></OfficeCard>
        <OfficeCard></OfficeCard>
        <OfficeCard></OfficeCard>
      </main>
    </Layout>
  )
}
