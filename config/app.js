const express = require('express')
const dbConnection = require('./dbConnection')
const createDatabaseTables = require('./createTables')

const app = express()
const db = dbConnection()
createDatabaseTables(db)

app.use(express.json())
app.use(express.urlencoded({
  extended: true,
}))

module.exports = app