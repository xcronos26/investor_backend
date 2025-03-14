import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RespostasPivotei extends BaseSchema {
  protected tableName = 'respostaspivotei'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements('id') // bigint com auto incremento e chave primária
      table.integer('usuario_id').unsigned().notNullable() // Relacionamento com usuário
      table.text('pergunta').notNullable() // Pergunta em formato texto
      table.text('resposta').notNullable() // Resposta em formato texto
      table.timestamp('data_criacao', { useTz: true }).defaultTo(this.now()) // Data de criação

      table.foreign('usuario_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
