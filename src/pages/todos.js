import {React} from "react";
import { useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      text: "Buy milk",
      completed: false,
    },
    {
      text: "Wash the car",
      completed: false,
    },
    {
      text: "Do the laundry",
      completed: false,
    },
  ]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const handleCompleteTodo = (id) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = true;
      }
      return todo;
    }));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>To-do list</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleCompleteTodo(todo.id)}>
              {todo.completed ? "Uncomplete" : "Complete"}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new todo"
        onChange={(e) => handleAddTodo(e.target.value)}
      />
    </div>
  );
};

export default Todos;
