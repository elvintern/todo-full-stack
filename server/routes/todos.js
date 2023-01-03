const express = require('express')

const db = require('../db/todos')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getTodos()
    .then((todos) => {
      res.json(todos)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/filteredTodos', (req, res) => {
  const { status } = req.body
  db.getFilteredTodos(status)
    .then((todos) => {
      res.json(todos)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  db.addTodo(req.body)
    .then(() => {
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/', (req, res) => {
  const id = req.body.id
  db.deleteTodo(id)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/', (req, res) => {
  db.updateTodo(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/clear', (req, res) => {
  db.clearTodo()
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
