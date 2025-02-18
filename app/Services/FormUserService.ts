import FormUser from 'App/Models/FormUser'

class FormUserService {
  public async saveStep1(data: {
    nome: string
    site: string
    linkedin: string
    ano_fundacao: number
    cidade: string
    usuario_id: number
  }) {
    try {
      // Verifica se já existe um formulário para o usuario_id
      let formulario = await FormUser.findBy('usuario_id', data.usuario_id)

      if (formulario) {
        // Se existir, apenas atualiza os dados
        formulario.merge(data)
        await formulario.save()

        return { success: true, id: formulario.id, message: 'Formulário atualizado com sucesso' }
      } else {
        // Se não existir, cria um novo formulário
        formulario = await FormUser.create(data)

        return { success: true, id: formulario.id, message: 'Formulário criado com sucesso' }
      }
    } catch (error) {
      console.error('Erro ao salvar formulário:', error)
      throw new Error('Erro ao processar formulário')
    }
  }
}

export default new FormUserService()
