import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
