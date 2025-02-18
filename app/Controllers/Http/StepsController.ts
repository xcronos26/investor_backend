import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FormUserService from 'App/Services/FormUserService'
import Step2Service from 'App/Services/Step2Service'

export default class StepsController {
  public async saveStep1({ request, response }: HttpContextContract) {
    const { nome, site, linkedin, ano_fundacao, cidade, usuario_id } = request.only([
      'nome', 'site', 'linkedin', 'ano_fundacao', 'cidade', 'usuario_id'
    ])

    try {
      const result = await FormUserService.saveStep1({
        nome,
        site,
        linkedin,
        ano_fundacao,
        cidade,
        usuario_id,
      })

      return response.status(200).json({ message: 'Dados salvos com sucesso', id: result.id })
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao processar formulário' })
    }
  }



  public async saveStep2({ request, response }: HttpContextContract) {
    const { usuario_id, modelo_negocio, vertical_atuacao, problema, solucao } = request.only([
      'usuario_id', 'modelo_negocio', 'vertical_atuacao', 'problema', 'solucao'
    ])

    if (!usuario_id) {
      return response.status(400).json({ error: 'Usuário não identificado' })
    }

    try {
      const result = await Step2Service.saveStep2(usuario_id, modelo_negocio, vertical_atuacao, problema, solucao)
      return response.status(200).json(result)
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }
}
