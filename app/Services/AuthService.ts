import User from 'App/Models/User'
import FormUser from 'App/Models/FormUser'
import type { AuthContract } from '@ioc:Adonis/Addons/Auth'

class AuthService {
  public async login(auth: AuthContract, email: string, password: string) {
    try {
      // Tenta autenticar o usuário
      const token = await auth.use('api').attempt(email, password)

      // Busca o usuário autenticado
      const user = await User.findByOrFail('email', email)

      // Verifica se o usuário já tem um formulário preenchido
      let form = await FormUser.findBy('usuario_id', user.id)

      if (!form) {
        // Se não existir, cria um novo formulário para o usuário
        form = await FormUser.create({
          usuario_id: user.id,
          nome: '',
          site: '',
          linkedin: '',
          ano_fundacao: 0,
          cidade: '',
        })
      }

      return {
        success: true,
        token: token.token,
        userId: user.id,
        userName: user.name,
        formId: form.id, // Retorna o ID do formulário (novo ou existente)
      }
    } catch {
      throw new Error('Credenciais inválidas')
    }
  }
}

export default new AuthService()
