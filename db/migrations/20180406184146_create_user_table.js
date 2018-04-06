
exports.up = (knex, Promise) => {
  return knex.schema.createTable('usuario', table => {
    table.string('cpf', 11).primary()
    table.string('senha', 255).notNull()
    table.string('nome', 255).notNull()
    table.string('email', 255).notNull()
    table.integer('pontuacao').notNull().defaultTo(0)
    table.boolean('ativo').notNull().defaultTo(true)
    table.integer('cargo_id', 11).unsigned().notNull()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

    table.foreign('cargo_id').references('id').inTable('cargo')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('usuario')
}