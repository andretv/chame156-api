const knex = require('./../../db/knex')

const tableName = 'cargo'

const create = data => {

  if (Array.isArray(data)) {
    data.forEach((r, i) => {
      if (!r.nome) throw new Error(`Necessario o campo nome na posição ${i} do array`);
      if (!r.descricao) throw new Error(`Necessario o campo descricao na posição ${i} do array`);
    })
  } else {
    if (!data.nome) throw new Error('Necessario o campo nome');
    if (!data.descricao) throw new Error('Necessario o campo descricao');
  }

  return knex
    .insert(data, 'id')
    .into(tableName)
    .then(ids =>
      knex
        .select('*')
        .from(tableName)
        .whereIn('id', ids)
    )
    .then(role => role[0])
}

const findAll = () => {
  return knex
    .select('*')
    .from(tableName)
}

const findOne = id => {
  if (typeof id !== 'number') throw new Error('Id precisa ser do tipo Number');
  return knex
    .select('*')
    .from(tableName)
    .where('id', id)
    .then(result => result[0])
}

const update = (id, updateObj) => {
  return knex
    .from(tableName)
    .where('id', id)
    .update(updateObj, 'id')
    .then(id =>
      knex
        .select('*')
        .from(tableName)
        .where('id', parseInt(id, 10))
    )
    .then(role => role[0])
}

const deleteOne = id => {
  if (typeof id !== 'number') throw new Error('Id precisa ser do tipo Number');
  return knex
    .from(tableName)
    .where('id', id)
    .delete('id')
    .then(result => result[0])
}

const deleteMany = ids => {
  if (!Array.isArray(ids)) throw new Error('Ids precisa ser do tipo Number');
  return knex
    .from(tableName)
    .whereIn('id', ids)
    .delete('id')
}

module.exports = {
  create,
  update,
  findAll,
  findOne,
  deleteOne,
  deleteMany,
}