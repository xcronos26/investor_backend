import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User' 

export default class Formulario extends BaseModel {
  public static table = 'formulario'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public site: string

  @column()
  public linkedin: string

  @column()
  public ano_fundacao: number

  @column()
  public cidade: string

  @column()
  public usuario_id: number

  // Step 2
  @column()
  public modelo_negocio: string

  @column()
  public vertical_atuacao: string

  @column()
  public problema: string

  @column()
  public solucao: string

  // Step 3
  @column()
  public cliente_ideal: string

  @column()
  public proposta_valor: string

  @column()
  public maturidade: string

  @column()
  public qtd_colaboradores: number

  // Step 4
  @column()
  public estrategia_aquisicao: string

  @column()
  public base_clientes: string

  @column()
  public plano_crescimento: string

  @column()
  public maior_desafio: string

  // Step 5
  @column()
  public tecnologias: string

  @column()
  public impacto_gateway_pagamento: string

  @column()
  public impacto_realidade_aumentada: string

  @column()
  public impacto_analise_dados: string

  @column()
  public impacto_ia: string

  @column()
  public impacto_blockchain: string

  @column()
  public impacto_cripto: string

  @column()
  public impacto_tokenizacao: string

  // Step 6
  @column()
  public tam_sam_som: string

  @column()
  public concorrentes: string

  // Step 7
  @column()
  public fonte_receita: string

  @column()
  public recebeu_investimento: number

  @column()
  public mrr: string

  @column()
  public valor_ultima_capta: string

  @column()
  public ticket_medio: string

  @column()
  public percentual_equity_negociado: string

  @column()
  public status_captacao_aberta: string

  @column()
  public valor_buscado: string

  @column()
  public percentual_equity_disponivel: string

  // Step 8 (NOVOS CAMPOS)
  @column()
  public valuation: string

  @column()
  public cap_table_socios: string

  @column()
  public estrategia_saida: string

  @column()
  public alocacao_recursos: string

  @column()
  public pitch_link: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User, { foreignKey: 'usuario_id' })
  public usuario: BelongsTo<typeof User>
}
