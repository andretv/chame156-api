const express = require('express')
const knex = require('../db/knex')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true,
}))

module.exports = app