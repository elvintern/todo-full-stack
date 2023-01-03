const connection = require('./connection')

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  clearTodo,
  getFilteredTodos,
}

function getTodos(db = connection) {
  return db('todos').select()
}

function getFilteredTodos(status, db = connection) {
  return db('todos').where('status', status).select()
}

function addTodo({ todo }, db = connection) {
  return db('todos').insert({ todo, status: false })
}

function deleteTodo(id, db = connection) {
  return db('todos').where('id', id).del()
}

function updateTodo({ id, status }, db = connection) {
  return db('todos').where('id', id).update({ status: !status })
}

function clearTodo(db = connection) {
  return db('todos').where('status', true).del()
}
