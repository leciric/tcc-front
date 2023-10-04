import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <SignIn afterSignInUrl="/my-documents" afterSignUpUrl="/my-documents" />
  )
}
