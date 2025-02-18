import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User' // Importando a model de usuário

export default class Formulario extends BaseModel {
  public static table = 'formulario' // Nome correto da tabela no banco

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
  public usuario_id: number // Chave estrangeira referenciando 'users.id'

  // Campos do Step 2
  @column()
  public modelo_negocio: string

  @column()
  public vertical_atuacao: string

  @column()
  public problema: string

  @column()
  public solucao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  // 🔗 Relacionamento com a tabela de usuários
  @belongsTo(() => User, { foreignKey: 'usuario_id' })
  public usuario: BelongsTo<typeof User>
}
