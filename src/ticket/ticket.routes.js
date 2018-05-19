const express = require('express')
const router = express.Router()

const ticketController = require('./ticket.controller')

const routes = {
  findAll(req, res) {
    ticketController.findAll()
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
  findOne(req, res) {
    const { id } = req.params
    ticketController.findOne(parseInt(id, 10))
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
  create(req, res) {
    const { cpf, ...rest } = req.body

    ticketController.create(cpf, rest)
      .then(data => res.status(201).json(data))
      .catch(err => res.status(500).send(err))
  },
  update(req, res) {
    const { id } = req.params
    ticketController.update(id, req.body)
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
  delete(req, res) {
    const { id } = req.params
    ticketController.deleteOne(parseInt(id, 10))
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).send(err))
  },
}

router.get('/', routes.findAll)
router.get('/:id', routes.findOne)

router.post('/', routes.create)

router.patch('/:id', routes.update)

router.delete('/:id', routes.delete)

module.exports = router