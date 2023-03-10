import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../slices/todos'

function AddTodo() {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')
  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      const newTodo = { todo }
      dispatch(addNewTodo(newTodo))
      setTodo('')
    }
  }

  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        value={todo}
      />
    </>
  )
}

export default AddTodo
