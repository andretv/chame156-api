const ticketModel = require('./ticket.model')

const findAll = cpf => ticketModel.findAll(cpf)
const findOne = id => ticketModel.findOne(id)
const create = (cpf, data) => ticketModel.create(cpf, data)
const update = (id, data) => ticketModel.update(id, data)
const deleteOne = id => ticketModel.deleteOne(id)
const deleteMany = ids => ticketModel.deleteMany(ids)

module.exports = {
  findAll,
  findOne,
  create,
  update,
  deleteOne,
  deleteMany,
}