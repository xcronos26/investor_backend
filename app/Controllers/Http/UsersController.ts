import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import AuthService from 'App/Services/AuthService'

export default class UsersController {
    public async index({ }: HttpContextContract) {
        const user = await User.all()
        return user
    }

    public async store({ request }: HttpContextContract) {
        const body = request.only(['name', 'email', 'password', 'profile', 'logo'])

        const user = await User.create({
            name: body.name,
            email: body.email,
            password: body.password,
            profile: body.profile,
            logo: body.logo
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
            const result = await AuthService.login(auth, email, password)
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
