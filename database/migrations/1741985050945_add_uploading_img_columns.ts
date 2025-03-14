import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AddLogoToFormulario extends BaseSchema {
  protected tableName = 'formulario'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('logo').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('logo')
    })
  }
}
