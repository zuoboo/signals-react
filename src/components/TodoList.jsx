import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = "TODOS";

export const TodoList = () => {
  console.log("Rendering TodoList");

  const [todos, setTodos] = useState(() => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value === null) return [];
    return JSON.parse(value);
  });

  const [newTodoName, setNewTodoName] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: crypto.randomUUID(), name: newTodoName, complete: false },
      ];
    });
  };

  const toggleTodo = (id, completed) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

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
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`p-2 ${todo.completed ? "line-through" : ""}`}
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
  );
};