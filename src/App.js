import React, { useState } from "react";
import "./App.css";

function Todo({ todo, idx }) {
  return <div className="todo">{todo.text}</div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new todo..."
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

// create our state within App component, using useState
// this of 'setTodos' as 'this.state' and useState as 'this.state.setState()'
// by default, the state of todos has three todos
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Go for a quick jog",
      isCompleted: false
    },
    {
      text: "Watch the new episode of  Game of Thrones",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, idx) => (
          <Todo key={idx} index={idx} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
