import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AlterColumnsForStrings extends BaseSchema {
  protected tableName = 'formulario'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      // Alterando as colunas para varchar
      table.string('mrr').alter()
      table.string('valor_ultima_capta').alter()
      table.string('ticket_medio').alter()
      table.string('percentual_equity_negociado').alter()
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      // Revertendo as alterações para o tipo original (float)
      table.float('mmr').alter()
      table.float('valor_ultima_capta').alter()
      table.float('ticket_medio').alter()
      table.float('percentual_equity_negociado').alter()
    })
  }
}
