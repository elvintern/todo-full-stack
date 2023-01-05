import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCompleted, fetchTodos, showFilteredTodos } from '../slices/todos'

function Footer() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  function showAll() {
    return dispatch(fetchTodos())
  }

  function showActive() {
    dispatch(showFilteredTodos(false))
  }

  function showCompleted() {
    dispatch(showFilteredTodos(true))
  }

  let leftItemNum = todos.filter((todo) => {
    return !todo.status
  }).length

  return (
    <>
      <span className="todo-count">{leftItemNum} item left</span>
      <ul className="filters">
        <li>
          <a onClick={showAll} className="selected">
            All
          </a>
        </li>
        <li>
          <a onClick={showActive}>Active</a>
        </li>
        <li>
          <a onClick={showCompleted}>Completed</a>
        </li>
      </ul>
      <button
        onClick={() => dispatch(clearCompleted())}
        className="clear-completed"
      >
        Clear Completed
      </button>
    </>
  )
}

export default Footer
