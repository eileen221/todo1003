import "./styles/todo-item.css";

const TodoItem = ({ content, isCompleted, index, setTodos }) => {
  //1.trigger double click event
  //2. setTodos change state accordingly
  //3. updated todos will be passed into TodoItem

  const modTodo = (index) => {
    setTodos((prev) => {
      return prev.map((todo, i) => {
        if (i !== index) {
          return todo;
        }

        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    });
  };

  const delTodo = (index) => {
    setTodos((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };

  return (
    <li className="todo-item">
      <span
        onDoubleClick={() => modTodo(index)}
        className={isCompleted ? "task-done" : "task-imcompleted"}
      >
        {content}
      </span>
      <button className="btn-normal" onClick={() => delTodo(index)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
