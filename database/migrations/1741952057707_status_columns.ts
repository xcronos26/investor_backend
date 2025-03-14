import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddStatusToFormulario extends BaseSchema {
  protected tableName = 'formulario'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.enu('status', ['Enviado', 'Em análise', 'Concluído']).defaultTo('Em análise')
    })
    
    this.schema.alterTable('investor_reports', (table) => {
      table.string('mes').alter() // Alterando de INT para VARCHAR
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('status')
    })
    
    this.schema.alterTable('investor_reports', (table) => {
      table.integer('mes').alter() // Revertendo para INT caso necessário
    })
  }
}
