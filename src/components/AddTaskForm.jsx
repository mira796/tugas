import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const AddTaskForm = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("to-do");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ title, description, status, priority });
    setTitle("");
    setDescription("");
    setStatus("to-do");
    setPriority("medium");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <input
        type="text"
        placeholder="Title"
        className="p-2 border rounded col-span-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="p-2 border rounded col-span-1"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="p-2 border rounded"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="to-do">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <select
        className="p-2 border rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded col-span-1 hover:bg-purple-700">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
