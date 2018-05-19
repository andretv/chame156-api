const userModel = require('./user.model')
const ticketModel = require('./../ticket/ticket.model')

const findAll = () => userModel.findAll()
const findOne = cpf => userModel.findOne(cpf)
const create = data => userModel.create(data)
const update = (cpf, data) => userModel.update(cpf, data)
const deleteOne = cpf => userModel.deleteOne(cpf)
const deleteMany = cpfs => userModel.deleteMany(cpfs)
const auth = async (cpf, password) =>
  await userModel.auth(cpf, password)
    ? userModel.findOne(cpf)
    : false

module.exports = {
  findAll,
  findOne,
  create,
  update,
  deleteOne,
  deleteMany,
  auth,
}