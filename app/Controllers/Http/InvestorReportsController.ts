import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
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

    public async getAllFormReportsData({ response }: HttpContextContract) {
      try {
        // Buscando todos os dados da tabela 'investor_reports'
        const formData = await Database.from('investor_reports').select('*')
    
        return response.status(200).json(formData)
      } catch (error) {
        return response.status(500).json({ error: 'Erro ao buscar os dados', details: error.message })
      }
    }


    public async getAllInvestorReports({ params, response }: HttpContextContract) {
      const { id } = params;
  
      if (!id) {
        return response.status(400).json({ error: 'ID do relatório de investidor é necessário' });
      }
  
      try {
        const results = await Database
          .from('investor_reports')
          .select('id', 'mes', 'faturamento', 'mrr', 'ano')
          .where('usuario_id', id)
          .orderBy('id', 'desc');
  
        return response.status(200).json(results);
      } catch (err) {
        console.error('Erro ao buscar todos os relatórios de investidores:', err.message);
        return response.status(500).json({ error: 'Erro ao buscar dados dos relatórios de investidores', details: err.message });
      }
    }
  }