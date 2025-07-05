// File: src/App.jsx
import React from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm"; // ✅ diganti dari TaskForm
import StatBox from "./components/StatBox";
import { TaskProvider } from "./context/TaskContext";

const App = () => {
  return (
    <TaskProvider>
      <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <h1 className="text-4xl font-bold text-purple-600 mb-6 text-center">Task Manager</h1>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <StatBox status="to-do" />
            <StatBox status="in-progress" />
            <StatBox status="done" />
          </div>
          <AddTaskForm /> {/* ✅ juga diganti di sini */}
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  );
};

export default App;
