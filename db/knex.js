const env = process.env.NODE_ENV || 'development'
const config = require('./../config/knex')[env]
module.exports = require('knex')(config)