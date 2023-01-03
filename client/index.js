import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import store from './slices/index'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
