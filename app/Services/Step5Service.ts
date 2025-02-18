import FormUser from 'App/Models/FormUser'

export default class Step5Service {
  public static async saveStep5(
    usuario_id: number,
    tecnologias: string,
    impacto_gateway_pagamento: string,
    impacto_realidade_aumentada: string,
    impacto_analise_dados: string,
    impacto_ia: string,
    impacto_blockchain: string,
    impacto_cripto: string,
    impacto_tokenizacao: string
  ) {
    try {
      // Verificar se o formulário existe
      const formulario = await FormUser.findBy('usuario_id', usuario_id)

      if (!formulario) {
        throw new Error('Formulário não encontrado para este usuário')
      }

      // Atualizar os campos do Step 5
      formulario.merge({
        tecnologias,
        impacto_gateway_pagamento,
        impacto_realidade_aumentada,
        impacto_analise_dados,
        impacto_ia,
        impacto_blockchain,
        impacto_cripto,
        impacto_tokenizacao,
      })

      await formulario.save()

      return { message: 'Dados do Step 5 atualizados com sucesso!' }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
