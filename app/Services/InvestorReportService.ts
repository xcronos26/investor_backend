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
}

export default new InvestorReportService()