const knex = require('knex')

module.exports = () => knex({
  client: 'mysql',
  connection: {
    host: 'mysql',
    user: 'root',
    password: 'chame156',
    database: 'chame156'
  }
})