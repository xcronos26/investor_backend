import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IsStartupMiddleware {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    await auth.check() // Verifica se o usuário está autenticado

    if (!auth.user || auth.user.profile !== 'startup') {
      return response.forbidden({
        error: 'Acesso negado. Apenas usuários do tipo startup podem acessar esta rota.'
      })
    }

    await next() // Passa para a próxima etapa do fluxo
  }
}
