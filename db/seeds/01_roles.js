
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('cargo').del()
    .then(function () {
      // Inserts seed entries
      return knex('cargo').insert([
        {
          nome: 'admin',
          descricao: 'Administrador do sistema.',
        },
        {
          nome: 'funcionario',
          descricao: 'Mantedor do sistema.',
        },
        {
          nome: 'usuario',
          descricao: 'Usuario do sistema.',
        },
      ])
    })
}