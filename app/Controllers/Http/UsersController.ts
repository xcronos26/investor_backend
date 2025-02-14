import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
    public async index({ }: HttpContextContract) {
        const user = await User.all()
        return user
      }
    
      public async store({ request }: HttpContextContract) {
        const body = request.only(['name', 'email', 'password'])
        const user = await User.create({
          name: body.name,
          email: body.email,
          password: body.password
        })
    
        console.log(user.$isPersisted)
        
        return user
      }
    
      public async show({ request }: HttpContextContract) {
        const userId = request.param('id')
        const user = await User.findOrFail(userId)
    
        return user
      }
    
      public async update({ request }: HttpContextContract) {
        const userId = request.param('id')
        const body = request.only(['fullName', 'email', 'password'])
        const user = await User.findOrFail(userId)
        await user.merge(body).save()
    
        return user
      }
    
      public async destroy({ request }: HttpContextContract) {
        const userId = request.param('id')
        const user = await User.findOrFail(userId)
        await user.delete()
      }
    
      public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
    
        try {
          const token = await auth.use('api').attempt(email, password)
          const user = await User.findByOrFail('email', email) // Busca o usuário
      
          return { 
            token: token.token,
            userId: user.id, 
            userName: user.name 
          }
        } catch {
          return response.unauthorized({ error: 'Credenciais inválidas' })
        }
      }
    
      public async dashboard({ auth }: HttpContextContract) {
        await auth.use('api').authenticate()
        return `Olá ${auth.user!.name}, você está autenticado`
      }
}
