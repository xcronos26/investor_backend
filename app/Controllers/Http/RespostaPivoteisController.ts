import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RespostaPivotei from 'App/Models/RespostaPivotei'
import Database from '@ioc:Adonis/Lucid/Database'

export default class RespostaPivoteiController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const { usuario_id, respostas } = request.only(['usuario_id', 'respostas'])

      if (!usuario_id || !Array.isArray(respostas) || respostas.length === 0) {
        return response.badRequest({ error: 'Dados inválidos. Usuário e respostas são obrigatórios.' })
      }

      // Salva todas as respostas em uma única transação
      await Database.transaction(async (trx) => {
        for (const item of respostas) {
          await RespostaPivotei.create({
            usuarioId: usuario_id,
            pergunta: item.pergunta,
            resposta: item.resposta,
          }, { client: trx })
        }
      })

      return response.ok({ message: 'Respostas salvas com sucesso!' })
    } catch (error) {
      console.error('Erro ao salvar respostas:', error)
      return response.internalServerError({ error: 'Erro ao processar as respostas.' })
    }
  }
}
