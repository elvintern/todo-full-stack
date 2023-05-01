const path = require('path')
const express = require('express')
const server = express()
const todos = require('./routes/todos')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1/todos', todos)

server.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  } else {
    res.sendFile(path.join(__dirname, '..', 'index.html'))
  }
})

module.exports = server
