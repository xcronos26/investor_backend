import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserAdm from 'App/Models/UserAdm'
import AuthServiceAdm from 'App/Services/AuthServiceAdm'


export default class UsersAdmsController {

    public async store({ request }: HttpContextContract) {
        const body = request.only(['name', 'email', 'password'])
        const user = await UserAdm.create({
          name: body.name,
          email: body.email,
          password: body.password
        })
    
        console.log(user.$isPersisted)
        
        return user
      }



      public async loginAdm({ auth, request, response }: HttpContextContract) {
              const email = request.input('email')
              const password = request.input('password')
          
              try {
                const result = await AuthServiceAdm.login(auth, email, password)
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
