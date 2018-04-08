module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'db',
      user: 'postgres',
      password: 'chame156',
      database: 'chame156',
    },
    migrations: {
      tableName: 'migrations',
      directory: './../db/migrations',
    },
    seeds: {
      directory: '../db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: {
      host: 'db',
      user: 'postgres',
      password: 'chame156',
      database: 'chame156',
    },
    migrations: {
      tableName: 'migrations',
      directory: './../db/migrations',
    },
    seeds: {
      directory: '../db/seeds',
    },
  },
}
// module.exports = {
//   development: {
//     client: 'mysql',
//     connection: {
//       host: 'mysql',
//       user: 'root',
//       password: 'chame156',
//       database: 'chame156',
//     },
//     migrations: {
//       tableName: 'migrations',
//       directory: './../db/migrations',
//     },
//     seeds: {
//       directory: '../db/seeds',
//     },
//   },
//   production: {
//     client: 'mysql',
//     connection: {
//       host: 'mysql',
//       user: 'root',
//       password: 'chame156',
//       database: 'chame156',
//     },
//     migrations: {
//       tableName: 'migrations',
//       directory: './../db/migrations',
//     },
//     seeds: {
//       directory: '../db/seeds',
//     },
//   },
// }