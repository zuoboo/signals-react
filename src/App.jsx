import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { TodoList } from "./components/TodoList";

// App.jsx
// App.jsx
function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16"> {/* pt-16 for Navbar's height */}
        <main className="flex-1 p-10 flex justify-center mr-32"> {/* flex and justify-center to center TodoList */}
          <TodoList />
        </main>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
