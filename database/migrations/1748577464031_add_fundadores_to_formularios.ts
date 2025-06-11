// Migration para adicionar a coluna 'fundadores' na tabela 'formulario'

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'formulario' 

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.text('fundadores').nullable().after('vertical_atuacao') // Ajuste 'after' se necessário
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('fundadores')
    })
  }
}
