const knex = require('./../../db/knex')

const userTable = 'usuario'
const ticketTable = 'chamado'
const ticketTitleTable = 'titulo'
const ticketControlTable = 'chamado_controle'

const mapTicket = results => results.map(result => ({
  id: result.id,
  titulo: result.titulo,
  descricao: result.descricao,
  verdadeiro: result.verdadeiro,
  status_inicial: result.status_inicial,
  status_final: result.status_final,
  closed_at: result.closed_at,
  created_at: result.created_at,
  updated_at: result.updated_at,
  usuario: {
    cpf: result.cpf,
    nome: result.nome,
    email: result.email,
    pontuacao: result.pontuacao,
    ativo: result.ativo,
    cargo_id: result.cargo_id,
  },
}))

const create = async (cpf, data) => {
  const ticket = await knex
    .insert(data, 'id')
    .into(ticketTable)
  const ticketControl = await knex
    .insert({ cpf, chamado_id: parseInt(ticket, 10) })
    .into(ticketControlTable)

  return findOne(parseInt(ticket, 10))
}

const findAll = () => {
  return knex
    .select([
      `${ticketControlTable}.cpf`,
      `${ticketControlTable}.chamado_id`,
      `${ticketControlTable}.verdadeiro`,
      `${ticketTitleTable}.id`,
      `${ticketTitleTable}.titulo`,
      `${userTable}.cpf`,
      `${userTable}.nome`,
      `${userTable}.email`,
      `${userTable}.pontuacao`,
      `${userTable}.ativo`,
      `${ticketTable}.id`,
      `${ticketTable}.titulo_id`,
      `${ticketTable}.descricao`,
      `${ticketTable}.status_inicial`,
      `${ticketTable}.status_final`,
      `${ticketTable}.closed_at`,
      `${ticketTable}.created_at`,
      `${ticketTable}.updated_at`,
    ])
    .from(ticketControlTable)
    .innerJoin(userTable, `${ticketControlTable}.cpf`, `${userTable}.cpf`)
    .innerJoin(ticketTable, `${ticketControlTable}.chamado_id`, `${ticketTable}.id`)
    .innerJoin(ticketTitleTable, `${ticketTable}.titulo_id`, `${ticketTitleTable}.id`)
    .then(results => mapTicket(results))
}

const findOne = id => {
  if (typeof id !== 'number') throw new Error('Id precisa ser do tipo Number');
  return knex
    .select(
      `${ticketControlTable}.cpf`,
      `${ticketControlTable}.chamado_id`,
      `${ticketControlTable}.verdadeiro`,
      `${ticketTitleTable}.id`,
      `${ticketTitleTable}.titulo`,
      `${userTable}.cpf`,
      `${userTable}.nome`,
      `${userTable}.email`,
      `${userTable}.pontuacao`,
      `${userTable}.ativo`,
      `${ticketTable}.id`,
      `${ticketTable}.titulo_id`,
      `${ticketTable}.descricao`,
      `${ticketTable}.status_inicial`,
      `${ticketTable}.status_final`,
      `${ticketTable}.closed_at`,
      `${ticketTable}.created_at`,
      `${ticketTable}.updated_at`,
  )
    .from(ticketControlTable)
    .innerJoin(userTable, `${ticketControlTable}.cpf`, `${userTable}.cpf`)
    .innerJoin(ticketTable, `${ticketControlTable}.chamado_id`, `${ticketTable}.id`)
    .innerJoin(ticketTitleTable, `${ticketTable}.titulo_id`, `${ticketTitleTable}.id`)
    .where('chamado_id', id)
    .then(result => mapTicket(result))
    .then(result => result[0])
}

const update = (id, updateObj) => {
  return knex
    .from(ticketTable)
    .where('id', id)
    .update(updateObj, 'id')
    .then(id => findOne(parseInt(id, 10)))
}

const deleteOne = id => {
  if (typeof id !== 'number') throw new Error('Id precisa ser do tipo Number');
  return knex
    .from(ticketTable)
    .where('id', id)
    .delete('id')
    .then(result => result[0])
}

const deleteMany = ids => {
  if (!Array.isArray(ids)) throw new Error('Ids precisa ser do tipo Array');
  return knex
    .from(ticketTable)
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