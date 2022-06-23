import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { ITodo } from "./types";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoText.trim().length <= 0) return;

    setTodos((prev) => [
      ...prev,
      { text: todoText.trim(), done: false, id: prev.length + 1 },
    ]);
    setTodoText("");
  };

  const clearCompletedTodos = () => {
    const clearTodos = todos.filter((todo) => !todo.done);

    setTodos(clearTodos);
  };

  const handleDoneTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (id === todo.id) {
        todo.done = !todo.done;
        return todo;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <Header />

      <TodoList handleDoneTodo={handleDoneTodo} todos={todos} />

      <button className="clear-btn" onClick={clearCompletedTodos}>
        Clear completed
      </button>

      <TodoForm
        handleAddTodo={handleAddTodo}
        todoText={todoText}
        setTodoText={setTodoText}
      />
    </div>
  );
}

export default App;
