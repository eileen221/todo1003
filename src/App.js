import { useState } from "react";

import TodoHeader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  return (
    <div className="App">
      <TodoHeader headerTextContent="Todo" />
      <hr />
      <TodoInput setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default App;
