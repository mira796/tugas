import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { tasks } = useTasks();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const matchSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter ? task.status === statusFilter : true;
    const matchPriority = priorityFilter ? task.priority === priorityFilter : true;
    return matchSearch && matchStatus && matchPriority;
  });

  return (
    <div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="to-do">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <select
          className="p-2 border rounded"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="">All Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <ul className="space-y-4">
        {filteredTasks.map((task) => (
          <li key={task.id} className="p-4 border rounded bg-white shadow">
            <h3 className="font-bold text-lg text-purple-700">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
            <div className="text-sm text-gray-500 mt-1">
              <span>Status: {task.status}</span> | <span>Priority: {task.priority}</span>
            </div>
          </li>
        ))}
        {filteredTasks.length === 0 && (
          <p className="text-gray-500 text-center">No tasks found.</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
