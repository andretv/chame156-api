const express = require('express')
const router = express.Router()

const userController = require('./user.controller')
const ticketController = require('./../ticket/ticket.controller')

const routes = {
  findAll(req, res) {
    userController.findAll()
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
  findOne(req, res) {
    const { cpf } = req.params
    userController.findOne(cpf)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
  create(req, res) {
    userController.create(req.body)
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).send(err))
  },
  update(req, res) {
    const { cpf } = req.params
    userController.update(cpf, req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
  delete(req, res) {
    const { cpf } = req.params
    userController.deleteOne(cpf)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
  auth(req, res) {
    const { cpf, senha } = req.body
    userController.auth(cpf, senha)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
  tickets(req, res) {
    const { cpf } = req.params
    ticketController.findAll(cpf)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
}

router.get('/', routes.findAll)
router.get('/:cpf', routes.findOne)
router.get('/:cpf/tickets', routes.tickets)

router.post('/', routes.create)
router.post('/auth', routes.auth)

router.patch('/:cpf', routes.update)

router.delete('/:cpf', routes.delete)

module.exports = router