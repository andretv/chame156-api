
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('chamado_controle').del()
    .then(function () {
      // Inserts seed entries
      return knex('chamado_controle').insert([
        {
          cpf: '00653424965',
          chamado_id: 1,
        },
        {
          cpf: '00653424965',
          chamado_id: 2,
        },
        {
          cpf: '00653424965',
          chamado_id: 3,
        },
        {
          cpf: '00653424965',
          chamado_id: 4,
        },
      ])
    })
}