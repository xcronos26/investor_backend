import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import AuthServiceAdm from 'App/Services/AuthServiceAdm'


export default class UsersAdmsController {

    public async store({ request }: HttpContextContract) {
        const body = request.only(['name', 'email', 'password'])
        const user = await User.create({
          name: body.name,
          email: body.email,
          password: body.password,
          isAdmin: true
        })
    
        console.log(user.$isPersisted)
        
        return user
      }



      public async loginAdm({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
    
        try {
          const result = await AuthServiceAdm.loginAdm(auth, email, password)
    
          // Busca o usuário e verifica se é administrador
          const user = await User.findBy('email', email)
    
          if (!user || !user.isAdmin) {
            return response.unauthorized({ error: 'Acesso negado para não administradores' })
          }
    
          return response.status(200).json(result)
        } catch {
          return response.unauthorized({ error: 'Credenciais inválidas' })
        }
      }



          
            public async dashboard({ auth }: HttpContextContract) {
              await auth.use('api').authenticate()
              return `Olá ${auth.user!.name}, você está autenticado`
            }
}
