import React from "react";
import { BsTrashFill } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ item, onUpdate, onDelete }) {
  const handleRemove = () => {
    onDelete(item);
  };
  const handleChange = (e) => {
    onUpdate({ ...item, status: e.target.checked ? "completed" : "active" });
  };
  return (
    <li key={item.id} className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={item.id}
        checked={item.status === "completed"}
        onChange={handleChange}
      />{" "}
      <label htmlFor={item.id} className={styles.text}>
        {item.text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleRemove} className={styles.button}>
          <BsTrashFill />
        </button>
      </span>
    </li>
  );
}
