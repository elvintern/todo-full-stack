import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  listTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  clearTodo,
  filterTodos,
} from '../apis/todos'

export const fetchTodos = createAsyncThunk('todos/fetchProducts', async () => {
  return await listTodos()
})

export const showFilteredTodos = createAsyncThunk(
  'todos/fetchProducts',
  async (status) => {
    return await filterTodos(status)
  }
)

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async (newTodo) => {
    await addTodo(newTodo)
    const todos = await listTodos()
    return todos
  }
)

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await removeTodo(id)
  const todos = await listTodos()
  return todos
})

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (updatedTodo) => {
    await toggleTodo(updatedTodo)
    const todos = await listTodos()
    return todos
  }
)

export const clearCompleted = createAsyncThunk(
  'todos/clearCompleted',
  async () => {
    await clearTodo()
    const todos = await listTodos()
    return todos
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (_, { payload }) => {
        return payload
      })
      .addCase(addNewTodo.fulfilled, (state, action) => action.payload)
      .addCase(deleteTodo.fulfilled, (state, action) => action.payload)
      .addCase(updateTodo.fulfilled, (state, action) => action.payload)
      .addCase(clearCompleted.fulfilled, (state, action) => action.payload)
      .addCase(showFilteredTodos.fulfilled, (state, action) => action.payload)
  },
})

export default todosSlice.reducer
