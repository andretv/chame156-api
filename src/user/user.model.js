const knex = require('./../../db/knex')
const lodash = require('lodash')
const bcrypt = require('bcryptjs')

const tableName = 'usuario'

const create = async data => {
  if (!data.cpf) throw new Error('Necessario o campo cpf');
  if (!data.senha) throw new Error('Necessario o campo senha');
  if (!data.nome) throw new Error('Necessario o campo nome');
  if (!data.email) throw new Error('Necessario o campo email');

  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(data.senha, salt)

  return knex
    .insert({
      ...data,
      senha: hashPassword
    }, 'cpf')
    .into(tableName)
    .then(cpf =>
      knex
        .select('*')
        .from(tableName)
        .whereIn('cpf', cpf)
    )
    .then(user => lodash.omit(user[0], ['senha']))
}

const findAll = () => {
  return knex
    .select('*')
    .from(tableName)
    .then(results => results.map(result => lodash.omit(result, ['senha'])))
}

const findOne = cpf => {
  if (typeof cpf !== 'string') throw new Error('Cpf precisa ser do tipo String');
  return knex
    .select('*')
    .from(tableName)
    .where('cpf', cpf)
    .then(result => result[0])
    .then(result => lodash.omit(result, ['senha']))
}

const update = (cpf, updateObj) => {
  if (typeof cpf !== 'string') throw new Error('Cpf precisa ser do tipo String');
  return knex
    .from(tableName)
    .where('cpf', cpf)
    .update(updateObj, 'cpf')
    .then(cpf =>
      knex
        .select('*')
        .from(tableName)
        .where('cpf', parseInt(cpf, 10))
        .then(result => lodash.omit(result, ['senha']))
    )
}

const deleteOne = cpf => {
  if (typeof cpf !== 'string') throw new Error('Cpf precisa ser do tipo String');
  return knex
    .from(tableName)
    .where('cpf', cpf)
    .delete('cpf')
    .then(result => result[0])
}

const deleteMany = cpfs => {
  if (!Array.isArray(cpfs)) throw new Error('Cpfs precisa ser do tipo Array');
  return knex
    .from(tableName)
    .whereIn('cpf', cpfs)
    .delete('cpf')
}

const auth = (cpf, password) => {
  if (typeof cpf !== 'string') throw new Error('Cpf precisa ser do tipo String');
  return knex
    .select('*')
    .from(tableName)
    .where('cpf', cpf)
    .then(result => result[0])
    .then(result => {
      return bcrypt.compare(String(password), String(result.senha))
    })
}

module.exports = {
  auth,
  create,
  update,
  findAll,
  findOne,
  deleteOne,
  deleteMany,
}