import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterFormularioStep7 extends BaseSchema {
  protected tableName = 'formulario'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('status_captacao_aberta').alter() 
      
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.boolean('status_captacao_aberta').alter()
      
    })
  }
}
