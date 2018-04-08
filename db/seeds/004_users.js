const bcrypt = require('bcryptjs')

exports.seed = async (knex, Promise) => {
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash('123456', salt)
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuario').insert([
        {
          cpf: '00653424965',
          senha: password,
          nome: 'André Trevizan Vaccari',
          email: 'andrevaccari95@gmail.com',
          cargo_id: 1,
        },
      ])
    })
}