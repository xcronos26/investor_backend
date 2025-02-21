import FormUser from 'App/Models/FormUser'

export default class Step8Service {
  public static async saveStep8({
    usuario_id,
    valuation,
    cap_table_socios,
    estrategia_saida,
    alocacao_recursos,
    pitch_link,
  }: {
    usuario_id: number
    valuation: string
    cap_table_socios: string
    estrategia_saida: string
    alocacao_recursos: string
    pitch_link: string
  }) {
    const formulario = await FormUser.query().where('usuario_id', usuario_id).first()

    if (!formulario) {
      throw new Error('Formulário não encontrado para o usuário')
    }

    formulario.valuation = valuation
    formulario.cap_table_socios = cap_table_socios
    formulario.estrategia_saida = estrategia_saida
    formulario.alocacao_recursos = alocacao_recursos
    formulario.pitch_link = pitch_link

    await formulario.save()

    return formulario
  }
}
