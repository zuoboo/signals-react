import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import { TodoList } from './components/TodoList'
import { signal, effect } from '@preact/signals-react'

const LOCAL_STORAGE_KEY = 'TODOS'
const todos = signal(getTodos())

function getTodos() {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (value === null) return []
  return JSON.parse(value)
}
effect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos.value))
})

function App() {
  console.log('Rendering App')

  return (
    <div>
      <Navbar todos={todos} />
      <div className="min-h-screen pt-14">
        <main className="flex-1 p-10 flex justify-center mr-32">
          <TodoList todos={todos} />
        </main>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
