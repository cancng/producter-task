interface Props {
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  todoText: string;
  setTodoText: React.Dispatch<React.SetStateAction<string>>;
}

function TodoForm({ handleAddTodo, setTodoText, todoText }: Props) {
  return (
    <form onSubmit={handleAddTodo}>
      <input
        placeholder="Enter task..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
