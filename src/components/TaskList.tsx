import React from "react";
import { Task } from "../types";
import styles from './TaskList.module.css'

export default function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul className={styles.taskList}>
      {tasks.map((task) => (
        <li className={styles.task} key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
