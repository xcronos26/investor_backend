import Historico from 'App/Models/Historico'

class HistoricoService {
  public async getByUserId(startupId: number) {
    try {
      // Busca todos os relatórios do investidor por ID de usuário
      const logs = await Historico.query().where('startup_id', startupId).orderBy('created_at', 'desc')
      return logs
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new HistoricoService()