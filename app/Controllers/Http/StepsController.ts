import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import FormUserService from 'App/Services/FormUserService'
import Step2Service from 'App/Services/Step2Service'
import Step3Service from 'App/Services/Step3Service'
import Step4Service from 'App/Services/Step4Service'
import Step5Service from 'App/Services/Step5Service'
import Step6Service from 'App/Services/Step6Service'
import Step7Service from 'App/Services/Step7Service'
import Step8Service from 'App/Services/Step8Service'

export default class StepsController {
  public async saveStep1({ request, response }: HttpContextContract) {
    const { nome, site, linkedin, ano_fundacao, cidade, usuario_id } = request.only([
      'nome', 'site', 'linkedin', 'ano_fundacao', 'cidade', 'usuario_id'
    ])

    try {
      const result = await FormUserService.saveStep1({
        nome,
        site,
        linkedin,
        ano_fundacao,
        cidade,
        usuario_id,
      })

      return response.status(200).json({ message: 'Dados salvos com sucesso', id: result.id })
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao processar formulário' })
    }
  }



  public async saveStep2({ request, response }: HttpContextContract) {
    const { usuario_id, modelo_negocio, vertical_atuacao, problema, solucao } = request.only([
      'usuario_id', 'modelo_negocio', 'vertical_atuacao', 'problema', 'solucao'
    ])

    if (!usuario_id) {
      return response.status(400).json({ error: 'Usuário não identificado' })
    }

    try {
      const result = await Step2Service.saveStep2(usuario_id, modelo_negocio, vertical_atuacao, problema, solucao)
      return response.status(200).json(result)
    } catch (error) {
      return response.status(404).json({ error: error.message })
    }
  }


  public async saveStep3({ request, response }: HttpContextContract) {
    const { usuario_id, cliente_ideal, proposta_valor, maturidade, qtd_colaboradores } = request.only([
      'usuario_id',
      'cliente_ideal',
      'proposta_valor',
      'maturidade',
      'qtd_colaboradores',
    ])

    if (!usuario_id) {
      return response.status(400).json({ error: 'Usuário não identificado' })
    }

    try {
      const result = await Step3Service.saveStep3(
        usuario_id,
        cliente_ideal,
        proposta_valor,
        maturidade,
        qtd_colaboradores
      )

      return response.status(200).json(result)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao processar o Step 3', details: error.message })
    }
  }


  public async saveStep4({ request, response }: HttpContextContract) {
    const { usuario_id, estrategia_aquisicao, base_clientes, plano_crescimento, maior_desafio } = request.only([
      'usuario_id',
      'estrategia_aquisicao',
      'base_clientes',
      'plano_crescimento',
      'maior_desafio',
    ])

    if (!usuario_id) {
      return response.status(400).json({ error: 'Usuário não identificado' })
    }

    try {
      const result = await Step4Service.saveStep4(
        usuario_id,
        estrategia_aquisicao,
        base_clientes,
        plano_crescimento,
        maior_desafio
      )

      return response.status(200).json(result)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao processar o Step 4', details: error.message })
    }
  }



  public async saveStep5({ request, response }: HttpContextContract) {
    const {
      usuario_id,
      tecnologias,
      impacto_gateway_pagamento,
      impacto_realidade_aumentada,
      impacto_analise_dados,
      impacto_ia,
      impacto_blockchain,
      impacto_cripto,
      impacto_tokenizacao,
    } = request.only([
      'usuario_id',
      'tecnologias',
      'impacto_gateway_pagamento',
      'impacto_realidade_aumentada',
      'impacto_analise_dados',
      'impacto_ia',
      'impacto_blockchain',
      'impacto_cripto',
      'impacto_tokenizacao',
    ])

    if (!usuario_id) {
      return response.status(400).json({ error: 'Usuário não identificado' })
    }

    try {
      const result = await Step5Service.saveStep5(
        usuario_id,
        tecnologias,
        impacto_gateway_pagamento,
        impacto_realidade_aumentada,
        impacto_analise_dados,
        impacto_ia,
        impacto_blockchain,
        impacto_cripto,
        impacto_tokenizacao
      )

      return response.status(200).json(result)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao processar o Step 5', details: error.message })
    }
  }


  public async saveStep6({ request, response }: HttpContextContract) {
    const { usuario_id, tam_sam_som, concorrentes } = request.only([
      'usuario_id', 'tam_sam_som', 'concorrentes'
    ])

    if (!usuario_id) {
      return response.status(400).json({ error: 'Usuário não identificado' })
    }

    try {
      const result = await Step6Service.saveStep6(usuario_id, tam_sam_som, concorrentes)
      return response.status(200).json({ message: 'Dados do Step 6 salvos com sucesso', result })
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao processar o Step 6', details: error.message })
    }
  }


  public async saveStep7({ request, response }: HttpContextContract) {
    const {
      usuario_id,
      fonte_receita,
      recebeu_investimento,
      mrr,
      valor_ultima_capta,
      ticket_medio,
      percentual_equity_negociado,
      status_captacao_aberta,
      valor_buscado,
      percentual_equity_disponivel
    } = request.only([
      'usuario_id', 'fonte_receita', 'recebeu_investimento', 'mrr', 'valor_ultima_capta',
      'ticket_medio', 'percentual_equity_negociado', 'status_captacao_aberta', 'valor_buscado', 'percentual_equity_disponivel'
    ])
  
    // Verificando se o usuário foi informado
    if (!usuario_id) {
      return response.status(400).json({ error: 'Usuário não identificado' })
    }
  
    try {
      // Chamando o serviço Step7Service para salvar as informações
      const result = await Step7Service.saveStep7({
        usuario_id,
        fonte_receita,
        recebeu_investimento,
        mrr,
        valor_ultima_capta,
        ticket_medio,
        percentual_equity_negociado,
        status_captacao_aberta,
        valor_buscado,
        percentual_equity_disponivel
      })
  
      // Retorno caso a operação seja bem-sucedida
      return response.status(200).json({ message: 'Dados do Step 7 salvos com sucesso', result })
    } catch (error) {
      // Tratamento de erro com detalhamento
      return response.status(500).json({ error: 'Erro ao processar o Step 7', details: error.message })
    }
  }




  public async saveStep8({ request, response }: HttpContextContract) {
    const { 
      usuario_id, 
      valuation, 
      cap_table_socios, 
      estrategia_saida, 
      alocacao_recursos, 
      pitch_link 
    } = request.only([
      'usuario_id', 'valuation', 'cap_table_socios', 'estrategia_saida', 'alocacao_recursos', 'pitch_link'
    ])

    if (!usuario_id) {
      return response.status(400).json({ error: 'Usuário não identificado' })
    }

    try {
      const result = await Step8Service.saveStep8({
        usuario_id, 
        valuation, 
        cap_table_socios, 
        estrategia_saida, 
        alocacao_recursos, 
        pitch_link
      })

      return response.status(200).json({ message: 'Dados do Step 8 salvos com sucesso', result })
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao processar o Step 8', details: error.message })
    }
  }


  public async getAllFormData({ response }: HttpContextContract) {
    try {
      // Buscando todos os dados da tabela 'formulario'
      const formData = await Database.from('formulario').select('*')
  
      return response.status(200).json(formData)
    } catch (error) {
      return response.status(500).json({ error: 'Erro ao buscar os dados', details: error.message })
    }
  }
}
