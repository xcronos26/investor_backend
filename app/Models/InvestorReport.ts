import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class InvestorReport extends BaseModel {
  public static table = 'investor_reports'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public responsavel: string

  @column()
  public mes: number

  @column()
  public ano: number

  @column()
  public contato: string

  @column()
  public mrr: number

  @column()
  public faturamento: number

  @column()
  public despesas: number

  @column()
  public caixa: number

  @column()
  public cashBurn: number

  @column()
  public runway: number

  @column()
  public valuation: number

  @column()
  public clientes: number

  @column()
  public cac: number

  @column()
  public churn: number

  @column()
  public ltv: number

  @column()
  public boasNoticias: string

  @column()
  public masNoticias: string

  @column()
  public ajuda: string

  @column()
  public usuario_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}