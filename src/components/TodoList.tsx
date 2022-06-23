import { ITodo } from "../types";

interface Props {
  handleDoneTodo: (id: number) => void;
  todos: ITodo[];
}

function TodoList({ todos, handleDoneTodo }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className={`todo ${todo.done ? "completed" : ""}`}
          onClick={() => handleDoneTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
