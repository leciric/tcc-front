import { SparklesIcon } from '@heroicons/react/24/solid'

export function Logo() {
  return (
    <div className="flex flex-row items-center gap-x-3">
      <SparklesIcon className="h-12 w-12 rounded-full text-primary"></SparklesIcon>
      <p className="text-xl font-bold capitalize">DocGuard</p>
    </div>
  )
}
