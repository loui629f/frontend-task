import React, { useState } from 'react';
import { Task } from './types';

//Skal implementeres
//import TaskList from './components/TaskList'; 

//Skal Implementeres
//import NewTaskForm from './components/newTaskForm';

const initialTasks: Task[] = [
  { id: 1, title: 'Learn React' },
  { id: 2, title: 'Build a project' },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string) => {
    const newTask: Task = { id: tasks.length + 1, title };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      {/* Skal implementeres */}
      {/* <NewTaskForm addTask={addTask} />  */}

      {/* Skal implementeres */}
      {/* <TaskList tasks={tasks} /> */}

    </div>
  );
}

export default App;