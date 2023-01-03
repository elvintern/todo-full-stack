import React from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Footer from './Footer'

function App() {
  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <Todos />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
