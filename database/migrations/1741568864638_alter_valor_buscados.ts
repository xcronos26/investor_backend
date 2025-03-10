import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterValorBuscado extends BaseSchema {
  protected tableName = 'formulario'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('valor_buscado').alter() // Mudando de FLOAT para STRING
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.float('valor_buscado').alter() // Revertendo caso necessário
    })
  }
}
