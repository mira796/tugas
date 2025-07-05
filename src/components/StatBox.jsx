// File: src/components/StatBox.jsx
import React from "react";
import { useTasks } from "../context/TaskContext";

const StatBox = ({ status }) => {
  const { tasks } = useTasks();

  const count = tasks.filter((task) => task.status === status).length;

  const statusMap = {
    "to-do": { label: "To Do", bg: "bg-red-100", text: "text-red-700" },
    "in-progress": { label: "In Progress", bg: "bg-yellow-100", text: "text-yellow-700" },
    "done": { label: "Done", bg: "bg-green-100", text: "text-green-700" },
  };

  const { label, bg, text } = statusMap[status] || {};

  return (
    <div className={`p-4 rounded-xl shadow-md ${bg}`}>
      <p className={`text-md font-semibold ${text}`}>{label}</p>
      <p className={`text-2xl font-bold ${text}`}>{count}</p>
    </div>
  );
};

export default StatBox;
