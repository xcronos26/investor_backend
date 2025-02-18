import FormUser from 'App/Models/FormUser'

export default class Step6Service {
  public static async saveStep6(usuario_id: number, tam_sam_som: string, concorrentes: string) {
    const formulario = await FormUser.query().where('usuario_id', usuario_id).first()

    if (formulario) {
      formulario.tam_sam_som = tam_sam_som
      formulario.concorrentes = concorrentes
      await formulario.save()
      return formulario
    } else {
      throw new Error('Formulário não encontrado para o usuário')
    }
  }
}
