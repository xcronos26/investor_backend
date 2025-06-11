
// Migration para adicionar as colunas 'profile' e 'logo' na tabela 'users'
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users' 

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('profile').nullable().after('email') 
      table.string('logo').nullable().after('profile')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('profile')
      table.dropColumn('logo')
    })
  }
}
