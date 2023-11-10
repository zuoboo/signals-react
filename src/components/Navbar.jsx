export const Navbar = ({ todos }) => {
  console.log('Rendering Navbar')

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
          <span>Done: {todos.filter((todo) => todo.completed).length}</span>
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
