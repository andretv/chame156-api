const express = require('express')
const knex = require('../db/knex')

const app = express()

app.get('/', (req, res) => {
  knex
    .select('*')
    .from('usuario')
    .then(result => res.json(result))
    .catch(err => console.error(err))
})

app.use(express.json())
app.use(express.urlencoded({
  extended: true,
}))

module.exports = app