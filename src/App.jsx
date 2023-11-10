import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TodoList } from './components/TodoList'
import { useState, useEffect } from 'react'

const LOCAL_STORAGE_KEY = 'TODOS'
function App() {
  console.log('Rendering App')

  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (value === null) return []
    return JSON.parse(value)
  })

  const addTodo = (name) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: crypto.randomUUID(), name, complete: false }]
    })
  }

  const toggleTodo = (id, completed) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <Navbar todos={todos} />
      <div className="min-h-screen pt-16">
        <main className="flex-1 p-10 flex justify-center mr-32">
          <TodoList addTodo={addTodo} toggleTodo={toggleTodo} todos={todos} />
        </main>
        <Sidebar />
      </div>
    </>
  )
}

export default App
