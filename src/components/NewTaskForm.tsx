import React, { useState } from "react";
import styles from './NewTaskForm.module.css'

export default function NewTaskForm({
  createTask,
}: {
  createTask: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    createTask(title);
    setTitle('');
  }
  return (
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <label className={styles.formLabel} htmlFor="title">Title</label>
        <input
        className={styles.formInput}
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitle}
        />
        <button className={styles.formButton} type="submit">Create task</button>
      </form>
  );
}
