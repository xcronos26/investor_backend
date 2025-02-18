import FormUser from 'App/Models/FormUser'

class Step4Service {
  public static async saveStep4(
    usuario_id: number,
    estrategia_aquisicao: string,
    base_clientes: string,
    plano_crescimento: string,
    maior_desafio: string
  ) {
    try {
      // Verificar se o formulário já existe para o usuário
      const formulario = await FormUser.findBy('usuario_id', usuario_id)

      if (!formulario) {
        throw new Error('Formulário não encontrado para este usuário')
      }

      // Atualizar os dados do Step 4
      formulario.merge({
        estrategia_aquisicao,
        base_clientes,
        plano_crescimento,
        maior_desafio,
      })

      // Salvar no banco de dados
      await formulario.save()

      return { message: 'Dados do Step 4 atualizados com sucesso' }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default Step4Service
