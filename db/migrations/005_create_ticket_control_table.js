
exports.up = (knex, Promise) => {
  return knex.schema.createTable('chamado_controle', table => {
    table.string('cpf', 11).notNull()
    table.integer('chamado_id', 11).unsigned().notNull()
    table.boolean('verdadeiro').notNull().defaultTo(true)
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.foreign('cpf').references('cpf').inTable('usuario')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
    table.foreign('chamado_id').references('id').inTable('chamado')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('chamado_controle')
}