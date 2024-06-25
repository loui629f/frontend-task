import React, { useState } from "react";
import { Task } from "./types";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import styles from './App.module.css'

//Skal implementeres
//import TaskList from './components/TaskList';

//Skal Implementeres
//import NewTaskForm from './components/newTaskForm';

const initialTasks: Task[] = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Build a project" },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string) => {
    const newTask: Task = { id: tasks.length + 1, title };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className={styles.App}>
      <h1>Task Manager</h1>
      <TaskList tasks={tasks}></TaskList>
      <NewTaskForm createTask={addTask}></NewTaskForm>
    </div>
  );
}

export default App;
