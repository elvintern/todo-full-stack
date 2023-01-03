import { configureStore, combineReducers } from '@reduxjs/toolkit'

// import stuff from './stuff'
import todos from './todos'

const reducer = combineReducers({
  todos,
})

const store = configureStore({
  reducer,
})

export default store
