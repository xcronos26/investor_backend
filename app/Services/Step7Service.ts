import FormUser from 'App/Models/FormUser'

export default class Step7Service {
    public static async saveStep7({
        usuario_id,
        fonte_receita,
        recebeu_investimento, // Espera 'sim' ou 'não'
        mrr,
        valor_ultima_capta,
        ticket_medio,
        percentual_equity_negociado,
        status_captacao_aberta,
        valor_buscado,
        percentual_equity_disponivel
      }: {
        usuario_id: number
        fonte_receita: string
        recebeu_investimento: string // 'sim' ou 'não'
        mrr: string
        valor_ultima_capta: string
        ticket_medio: string
        percentual_equity_negociado: string
        status_captacao_aberta: string
        valor_buscado: string
        percentual_equity_disponivel: string
      }) {
        const formulario = await FormUser.query().where('usuario_id', usuario_id).first()
      
        if (formulario) {
          formulario.fonte_receita = fonte_receita
          formulario.recebeu_investimento = (recebeu_investimento === 'sim') ? 'sim' : 'não' // Convertendo para string 'sim' ou 'não'
          formulario.mrr = mrr
          formulario.valor_ultima_capta = valor_ultima_capta
          formulario.ticket_medio = ticket_medio
          formulario.percentual_equity_negociado = percentual_equity_negociado
          formulario.status_captacao_aberta = status_captacao_aberta
          formulario.valor_buscado = valor_buscado
          formulario.percentual_equity_disponivel = percentual_equity_disponivel
          
          await formulario.save()
      
          return formulario
        } else {
          throw new Error('Formulário não encontrado para o usuário')
        }
    }
}
