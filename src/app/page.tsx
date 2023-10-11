/* eslint-disable @next/next/no-page-custom-font */
'use client';
import Image from 'next/image';
import styled, { createGlobalStyle } from 'styled-components';
import TaskForm from './components/Form';
import TaskList from './components/List';
import { useEffect, useState } from 'react';
import Intro from './components/Intro';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
export default function Home() {
  const [tasks, setTasks] = useState<{ name: string; completed: boolean }[]>(
    []
  );

  useEffect(() => {
    // Load tasks from local storage on component mount
    const storedTasks =
      JSON.parse(localStorage.getItem('tasks') || 'null') || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName: string) => {
    const newTask: { name: string; completed: boolean } = {
      name: taskName,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (index: number) => {
    const updatedTasks: { name: string; completed: boolean }[] = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index: number, editedTaskName: string) => {
    const updatedTasks: { name: string; completed: boolean }[] = [...tasks];
    updatedTasks[index].name = editedTaskName;
    setTasks(updatedTasks);
  };

  return (
    <div style={{ fontFamily: 'Ambit, sans-serif' }}>
      <div className="flex flex-col font-Ambit bg-white dark:bg-black h-screen md:h-full">
        <GlobalStyle />
        <Intro />
        <div className="flex-grow">
          <TaskForm addTask={addTask} />
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
            editTask={editTask}
          />
        </div>
      </div>
    </div>
  );
}
