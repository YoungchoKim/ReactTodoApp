import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleAdd = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };
  const handleUpdate = (updated) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {todos
          .filter((item) => (filter === "all" ? true : item.status === filter))
          .map((item) => (
            <Todo
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
      </ul>

      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
