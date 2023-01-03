import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos, deleteTodo, updateTodo } from '../slices/todos'

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)

  const handleClick = (id) => {
    dispatch(deleteTodo({ id }))
  }

  const handleToggle = (id, status) => {
    dispatch(updateTodo({ id, status }))
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  return (
    <>
      <ul className="todo-list">
        {todos.map(({ id, todo, status }) => {
          return (
            <li key={id} className={status ? 'completed' : 'incompleted'}>
              <div className="view">
                {status ? (
                  <input
                    onClick={() => handleToggle(id, status)}
                    className="toggle"
                    type="checkbox"
                    checked
                  />
                ) : (
                  <input
                    onClick={() => handleToggle(id, status)}
                    className="toggle"
                    type="checkbox"
                  />
                )}
                <label>{todo}</label>
                <button
                  onClick={() => handleClick(id)}
                  className="destroy"
                ></button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Todos
