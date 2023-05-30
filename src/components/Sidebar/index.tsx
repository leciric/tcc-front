import Image from 'next/image'
import { NavigationItem } from './components/NavigationItem'
export function Sidebar() {
  return (
    <aside className="flex flex-col w-80 h-screen justify-between bg-slate-800 p-6 ">
      <Image src="/judge.png" width="48" height="32" alt="A gave logo"></Image>
      <div className="flex flex-col gap-6">
        <NavigationItem to="/meus-documentos">Meus documentos</NavigationItem>
        <NavigationItem to="/autenticar">Autenticar documento</NavigationItem>
        <NavigationItem>Validar documento autenticado</NavigationItem>
        <NavigationItem>Serviços</NavigationItem>
        <NavigationItem>Acabou as opções</NavigationItem>
      </div>

      <div className="flex flex-col gap-6">
        <NavigationItem>Ajuda</NavigationItem>
        <NavigationItem>Sair</NavigationItem>
      </div>
    </aside>
  )
}
