import InvestorReport from 'App/Models/InvestorReport'

class InvestorReportService {
  public async saveReport(data: Record<string, any>) {
    try {
      // Cria um novo formulário para o investidor
      const report = await InvestorReport.create(data)
      return report
    } catch (error) {
      throw new Error(error.message)
    }
  }
  public async getByUserId(userId: number) {
    try {
      // Busca todos os relatórios do investidor por ID de usuário
      const reports = await InvestorReport.query().where('usuario_id', userId).orderBy('created_at', 'desc').limit(1)
      return reports
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default new InvestorReportService()