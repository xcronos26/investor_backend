import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'formulario'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Chave primária
      table.string('nome').notNullable()
      table.string('site').nullable()
      table.string('linkedin').nullable()
      table.integer('ano_fundacao').nullable()
      table.string('cidade').nullable()

      // Chave estrangeira com referência à tabela 'users'
      table
        .integer('usuario_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE') // Se o usuário for deletado, o formulário também será excluído
        .notNullable()

      // Campos do Step 2
      table.string('modelo_negocio').nullable()
      table.string('vertical_atuacao').nullable()
      table.text('problema').nullable()
      table.text('solucao').nullable()

      // Campos de data
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
