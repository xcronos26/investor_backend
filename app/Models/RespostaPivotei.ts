import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class RespostaPivotei extends BaseModel {
  public static table = 'respostaspivotei' // Define o nome da tabela

  @column({ isPrimary: true })
  public id: number

  @column()
  public usuarioId: number

  @column()
  public pergunta: string

  @column()
  public resposta: string

  @column.dateTime({ autoCreate: true })
  public dataCriacao: DateTime

  @belongsTo(() => User, { foreignKey: 'usuarioId' })
  public usuario: BelongsTo<typeof User>
}
