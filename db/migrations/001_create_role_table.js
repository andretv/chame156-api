
exports.up = function (knex, Promise) {
  return knex.schema.createTable('cargo', table => {
    table.increments()
    table.string('nome', 255).notNull()
    table.string('descricao', 255).notNull()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cargo')
}