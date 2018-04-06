
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('titulo').del()
    .then(function () {
      // Inserts seed entries
      return knex('titulo').insert([
        {
          titulo: 'Alagamento',
        },
        {
          titulo: 'Desmoronamento',
        },
        {
          titulo: 'Buraco na pista',
        },
        {
          titulo: 'Arvore caida',
        },
      ])
    })
}