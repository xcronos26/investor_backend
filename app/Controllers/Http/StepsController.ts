import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FormUser from 'App/Models/FormUser'

export default class StepsController {
  public async saveStep1({ request, response }: HttpContextContract) {
    const { nome, site, linkedin, ano_fundacao, cidade, usuario_id } = request.only([
      'nome', 'site', 'linkedin', 'ano_fundacao', 'cidade', 'usuario_id'
    ])

    try {
      // Criar um novo formulário sem verificar nada
      const formulario = new FormUser()
      formulario.nome = nome
      formulario.site = site
      formulario.linkedin = linkedin
      formulario.ano_fundacao = ano_fundacao
      formulario.cidade = cidade
      formulario.usuario_id = usuario_id

      await formulario.save()

      return response.status(200).json({ message: 'Dados salvos com sucesso', id: formulario.id })
    } catch (error) {
      console.error('Erro ao salvar formulário:', error)
      return response.status(500).json({ error: 'Erro ao processar formulário', details: error.message })
    }
  }
}
