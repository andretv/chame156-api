const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const app = express()

app.use(helmet())
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
  extended: false,
}))

app.use('/user', require('./../src/user/user.routes'))
app.use('/ticket', require('./../src/ticket/ticket.routes'))

module.exports = app