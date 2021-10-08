import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("All")

  useEffect(() => {
    getLocalTodos()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    saveLocalTodos()
    // eslint-disable-next-line
  }, [todos])

  const saveLocalTodos = () => { localStorage.setItem("todos", JSON.stringify(todos)) }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  return (
    <div className="App">
      <header>Venance's Todo-List</header>
      <Form setFilter={ setFilter } todos={ todos } setTodos={ setTodos } inputText={ inputText } setInputText={ setInputText } />
      <TodoList filter={ filter } todos={ todos } setTodos={ setTodos } />
    </div>
  );
}

export default App;
