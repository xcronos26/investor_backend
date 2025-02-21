import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UpdateColunasStep8 extends BaseSchema {
  protected tableName = 'formulario'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('valuation').nullable()
      table.text('cap_table_socios').nullable()
      table.string('estrategia_saida').nullable()
      table.text('alocacao_recursos').nullable()
      table.string('pitch_link').nullable()
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('valuation')
      table.dropColumn('cap_table_socios')
      table.dropColumn('estrategia_saida')
      table.dropColumn('alocacao_recursos')
      table.dropColumn('pitch_link')
    })
  }
}
