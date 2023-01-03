import request from 'superagent'

export function listTodos() {
  return request.get('/api/v1/todos').then((res) => res.body)
}

export function filterTodos(status) {
  return request
    .post('/api/v1/todos/filteredTodos')
    .send({ status })
    .then((res) => res.body)
}

export function addTodo(newTodo) {
  return request.post('/api/v1/todos').send(newTodo)
}

export function removeTodo(id) {
  return request.delete('/api/v1/todos').send(id)
}

export function toggleTodo(updatedTodo) {
  return request.patch('/api/v1/todos').send(updatedTodo)
}

export function clearTodo() {
  return request.delete('/api/v1/todos/clear')
}
