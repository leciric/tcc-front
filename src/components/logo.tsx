import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex flex-row items-center gap-x-3">
      {/* <SparklesIcon className="h-12 w-12 rounded-full text-primary"></SparklesIcon> */}
      <Image src="/logo.webp" alt="2 Cartório" width={200} height={64}></Image>
      {/* <p className="text-xl font-bold capitalize">DocGuard</p> */}
    </div>
  )
}
