
exports.up = function (knex, Promise) {
  return knex.schema.createTable('titulo', table => {
    table.increments()
    table.string('titulo', 255).notNull()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('titulo')
}