import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleOnChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setText("");
      return;
    }
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          onChange={handleOnChange}
          value={text}
          placeholder="Add Todo"
        ></input>
        <button className={styles.button}>Add</button>
      </form>
    </div>
  );
}
