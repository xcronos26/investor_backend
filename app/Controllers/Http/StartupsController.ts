// Controller para retornar os dados formatados da One Page da startup 
// associada ao usuário autenticado
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FormUser from 'App/Models/FormUser'

export default class StartupController {
  public async getOnePage({ auth, response }: HttpContextContract) {
    const user = auth.user!

    try {
      const startupData = await FormUser.query()
        .where('usuario_id', user.id)
        .preload('usuario') 
        .first()

      if (!startupData) {
        return response.notFound({
          error: 'Dados da startup não encontrados para este usuário.'
        })
      }

      const onePageData = {
        nome: startupData.nome || 'Nome não informado',
        logo: startupData.usuario?.logo || 'https://via.placeholder.com/150',
        segmento: startupData.vertical_atuacao || 'Segmento não informado',
        fundadores: startupData.fundadores
          ? JSON.parse(startupData.fundadores)
          : ['Informação não disponível'],
        faturamento_mensal: startupData.mrr || 'Não informado',
        problemas: startupData.problema || 'Problemas não informados',
        solucoes: startupData.solucao || 'Soluções não informadas',
        investimento_necessario: startupData.valor_buscado || 'Não informado',
        contato: startupData.usuario?.email || 'Contato não informado',
        site: startupData.site,
        linkedin: startupData.linkedin,
        ano_fundacao: startupData.ano_fundacao,
        cidade: startupData.cidade,
        pitch_link: startupData.pitch_link,
      }

      return response.ok({ startup: onePageData })
    } catch (error) {
      console.error('Erro ao buscar dados da One Page:', error)

      if (error instanceof SyntaxError) {
        return response.internalServerError({
          error: 'Erro ao processar dados dos fundadores (JSON inválido?).'
        })
      }

      return response.internalServerError({
        error: 'Ocorreu um erro interno ao processar sua solicitação.'
      })
    }
  }
}
