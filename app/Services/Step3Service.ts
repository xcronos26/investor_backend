import FormUser from 'App/Models/FormUser'

class FormularioService {
  public async saveStep3(
    usuario_id: number,
    clienteIdeal: string,
    propostaValor: string,
    maturidade: string,
    qtdColaboradores: number
  ) {
    try {
      // Verifica se já existe um formulário para esse usuário
      const formulario = await FormUser.findBy('usuario_id', usuario_id)

      if (!formulario) {
        throw new Error('Formulário não encontrado para este usuário')
      }

      // Atualiza os campos do Step 3
      formulario.merge({
        cliente_ideal: clienteIdeal,
        proposta_valor: propostaValor,
        maturidade: maturidade,
        qtd_colaboradores: qtdColaboradores,
      })

      await formulario.save()
      return { success: true, message: 'Dados do Step 3 atualizados com sucesso' }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new FormularioService()
