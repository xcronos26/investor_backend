import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthMiddleware {
  public async handle({ auth, response }: HttpContextContract, next: () => Promise<void>) {
    try {
      await auth.use('api').authenticate() // Verifica se o usuário está autenticado
      await next() // Continua para a próxima ação ou rota
    } catch (error) {
      return response.unauthorized({ message: 'Usuário não autenticado' }) // Se não estiver autenticado, retorna erro
    }
  }
}
