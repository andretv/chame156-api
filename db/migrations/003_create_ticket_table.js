
exports.up = function (knex, Promise) {
  return knex.schema.createTable('chamado', table => {
    table.increments()
    table.integer('titulo_id', 255).unsigned().notNull()
    table.string('descricao', 255).notNull()
    table.string('status_inicial', 255)
    table.string('status_final', 255)
    table.integer('status', 10).unsigned().notNull().defaultTo(1)
    table.boolean('verdadeiro').notNull().defaultTo(true)
    table.timestamp('closed_at')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.foreign('titulo_id').references('id').inTable('titulo')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('chamado')
}