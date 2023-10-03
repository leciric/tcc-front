import { authMiddleware } from '@clerk/nextjs'
export default authMiddleware({
  publicRoutes: ['/sign-in'],
  // Rota pública, o que não for sign in, vai ter protecão do middleware, o usuário tem que estar logado para acessar
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
