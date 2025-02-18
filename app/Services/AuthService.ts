import User from 'App/Models/User'
import type { AuthContract } from '@ioc:Adonis/Addons/Auth'

class AuthService {
  public async login(auth: AuthContract, email: string, password: string) {
    try {
      // Tenta autenticar o usuário
      const token = await auth.use('api').attempt(email, password)

      // Busca o usuário autenticado
      const user = await User.findByOrFail('email', email)

      return {
        success: true,
        token: token.token,
        userId: user.id,
        userName: user.name,
      }
    } catch {
      throw new Error('Credenciais inválidas')
    }
  }
}

export default new AuthService()
