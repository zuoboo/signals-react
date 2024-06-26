import { computed } from '@preact/signals-react'

export const Navbar = ({ todos }) => {
  console.log('Rendering Navbar')

  const completedTodosCount = computed(() => {
    return todos.value.filter((todo) => todo.completed).length
  })

  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between">
        <div>
          <a
            href="#"
            className="text-white py-2 px-4 hover:bg-gray-700 rounded"
          >
            Todos
          </a>
          <span className="text-red-500 font-bold">
            Done: {completedTodosCount.value}
          </span>
        </div>
        <div>
          <a
            href="#"
            className="text-white py-2 px-4 hover:bg-gray-700 rounded"
          >
            Zuoboo
          </a>
        </div>
      </div>
    </nav>
  )
}
