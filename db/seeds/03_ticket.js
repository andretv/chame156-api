
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('chamado').del()
    .then(function () {
      // Inserts seed entries
      return knex('chamado').insert([
        {
          titulo_id: 1,
          descricao: 'Rua esta interditada pela agua!',
          status_inicial: 'Rua alagada.',
        },
        {
          titulo_id: 2,
          descricao: 'Esta cheio de pedras aqui no km 312 da BR-116',
          status_inicial: 'Deslizamento leve de pedras.',
        },
        {
          titulo_id: 3,
          descricao: 'Entortei a roda do meu carro aqui na rua de casa! Socorro.',
          status_inicial: 'Burado de 20cm de diametro.',
        },
        {
          titulo_id: 4,
          descricao: 'Uma arvore caiu no meu carro T_T',
          status_inicial: 'Arvore de medio porte caida.',
        },
      ])
    })
}