const usuario = db => db.schema.hasTable('usuario')
  .then(exists => {
    if (!exists) {
      return db.schema.createTable('usuario', table => {
        table.string('cpf', 11).primary()
        table.string('nome', 255)
        table.string('password', 255)
        table.string('email', 255)
        table.string('tipo', 255)
        table.integer('pontuacao', 11)
        table.boolean('ativo')
        table.timestamps()
      })
    }
  })

module.exports = usuario