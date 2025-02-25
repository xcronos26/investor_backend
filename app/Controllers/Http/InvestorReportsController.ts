import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import InvestorReportService from 'App/Services/InvestorReportService'

export default class InvestorReportsController {
    public async saveReport({ request, response }: HttpContextContract) {
      const formData = request.only([
        'nome', 'responsavel', 'mes', 'ano', 'contato', 'mrr', 'faturamento', 
        'despesas', 'caixa', 'cashBurn', 'runway', 'valuation', 'clientes', 
        'cac', 'churn', 'ltv', 'boasNoticias', 'masNoticias', 'ajuda', 'usuario_id'
      ])
  
      if (!formData.usuario_id) {
        return response.status(400).json({ error: 'Usuário não identificado' })
      }
  
      try {
        const result = await InvestorReportService.saveReport(formData)
        return response.status(201).json({ message: 'Formulário criado com sucesso', id: result.id })
      } catch (error) {
        return response.status(500).json({ error: 'Erro ao salvar formulário', details: error.message })
      }
    }
  }