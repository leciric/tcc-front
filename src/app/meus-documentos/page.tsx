import { DocumentCard } from '@/components/DocumentCard'

export default function MyDocuments() {
  return (
    <section className="p-6 flex flex-col flex-1 ">
      <h1 className="text-xl font-semibold ">Meus documentos</h1>
      <p className="text-md font-normal">
        Aqui você encontra todos os documentos que foram autenticados por você
      </p>

      <div className="grid grid-cols-4 mt-4 gap-6">
        <DocumentCard></DocumentCard>
        <DocumentCard></DocumentCard>
        <DocumentCard></DocumentCard>
        <DocumentCard></DocumentCard>
        <DocumentCard></DocumentCard>
      </div>
    </section>
  )
}
