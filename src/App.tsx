import React, { useState } from "react";
import { Todo } from "./todo.model";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    const newTodos = { id: Math.random().toString(), text };
    setTodos((prevTodos) => [...prevTodos, newTodos]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
