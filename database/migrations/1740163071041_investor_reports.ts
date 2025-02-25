import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'investor_reports'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.string('responsavel').notNullable()
      table.integer('mes').notNullable()
      table.integer('ano').notNullable()
      table.string('contato').notNullable()
      table.decimal('mrr', 15, 2).notNullable()
      table.decimal('faturamento', 15, 2).notNullable()
      table.decimal('despesas', 15, 2).notNullable()
      table.decimal('caixa', 15, 2).notNullable()
      table.decimal('cash_burn', 15, 2).notNullable()
      table.integer('runway').notNullable()
      table.decimal('valuation', 15, 2).notNullable()
      table.integer('clientes').notNullable()
      table.decimal('cac', 15, 2).notNullable()
      table.decimal('churn', 5, 2).notNullable()
      table.decimal('ltv', 15, 2).notNullable()
      table.text('boas_noticias')
      table.text('mas_noticias')
      table.text('ajuda')
      table.integer('usuario_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}