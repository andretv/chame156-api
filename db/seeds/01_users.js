
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('usuario').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuario').insert([
        {
          cpf: '00653424965',
          senha: '123456',
          nome: 'André Trevizan Vaccari',
          email: 'andrevaccari95@gmail.com',
        },
      ]);
    });
};
