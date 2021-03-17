import React, { useState } from 'react'

import './App.css'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputTxt, setInputTxt] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className='App'>
      <header>
        <h2>Ashish Karki's Todo List</h2>
      </header>

      <Form
        inputTxt={inputTxt}
        setInputTxt={setInputTxt}
        todos={todos}
        setTodos={setTodos}
      />

      <TodoList todos={todos} />
    </div>
  )
}

export default App
