import FormUser from 'App/Models/FormUser'

class Step2Service {
  public async saveStep2(usuario_id: number, modelo_negocio: string, vertical_atuacao: string, problema: string, solucao: string) {
    // Verifica se o formulário já existe para o usuário
    const formulario = await FormUser.findBy('usuario_id', usuario_id)

    if (!formulario) {
      throw new Error('Formulário não encontrado para este usuário')
    }

    // Atualiza os campos do formulário existente
    formulario.merge({ modelo_negocio, vertical_atuacao, problema, solucao })
    await formulario.save()

    return { message: 'Dados do Step 2 atualizados com sucesso' }
  }
}

export default new Step2Service()
