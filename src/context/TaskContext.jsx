// File: src/context/TaskContext.jsx
import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = ({ title, description, status, priority }) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      status,
      priority,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
