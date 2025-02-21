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

      // 🔗 Chave estrangeira com referência à tabela 'users'
      table
        .integer('usuario_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE') // Se o usuário for deletado, o formulário também será excluído
        .notNullable()

      // 🔹 Campos do Step 2
      table.string('modelo_negocio').nullable()
      table.string('vertical_atuacao').nullable()
      table.text('problema').nullable()
      table.text('solucao').nullable()

      // 🔹 Campos do Step 3
      table.string('cliente_ideal').nullable()
      table.string('proposta_valor').nullable()
      table.string('maturidade').nullable()
      table.integer('qtd_colaboradores').nullable()

      // 🔹 Campos do Step 4
      table.string('estrategia_aquisicao').nullable()
      table.string('base_clientes').nullable()
      table.string('plano_crescimento').nullable()
      table.string('maior_desafio').nullable()

      // 🔹 Campos do Step 5
      table.string('tecnologias').nullable()
      table.string('impacto_gateway_pagamento').nullable()
      table.string('impacto_realidade_aumentada').nullable()
      table.string('impacto_analise_dados').nullable()
      table.string('impacto_ia').nullable()
      table.string('impacto_blockchain').nullable()
      table.string('impacto_cripto').nullable()
      table.string('impacto_tokenizacao').nullable()

      // 🔹 Campos do Step 6
      table.string('tam_sam_som').nullable() 
      table.text('concorrentes').nullable()  

      // 🔹 Campos do Step 7
      table.string('fonte_receita').nullable() 
      table.boolean('recebeu_investimento').nullable()
      table.float('mrr').nullable() 
      table.float('valor_ultima_capta').nullable() 
      table.float('ticket_medio').nullable() 
      table.float('percentual_equity_negociado').nullable() 
      table.boolean('status_captacao_aberta').nullable() 
      table.float('valor_buscado').nullable()
      table.float('percentual_equity_disponivel').nullable() 

      // 📆 Campos de data
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
