import { useState } from 'react'


export const TodoList = ({ todos }) => {
  console.log('Rendering TodoList')

  const [newTodoName, setNewTodoName] = useState('')

  const addTodo = (e) => {
    e.preventDefault()
    todos.value = [
      ...todos.value,
      { id: crypto.randomUUID(), name: newTodoName, complete: false },
    ]
    setNewTodoName('')
  }

  const toggleTodo = (id, completed) => {
    todos.value = todos.value.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed }
      }
      return todo
    })
  }

  return (
    <div className="w-full">
      <form
        onSubmit={addTodo}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="new-todo"
        >
          New Task
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="new-todo"
          type="text"
          placeholder="Add a new task"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <div className="pt-2 flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            TODO!!
          </button>
        </div>
      </form>
      <ul className="list-inside">
        {todos.value.map((todo) => (
          <li
            key={todo.id}
            className={`p-2 ${todo.completed ? 'line-through' : ''}`}
          >
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5"
                checked={todo.completed}
                onChange={(e) => toggleTodo(todo.id, e.target.checked)}
              />
              <span>{todo.name}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
