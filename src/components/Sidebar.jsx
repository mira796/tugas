import React from "react";
import { LayoutDashboard, ListTodo, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-purple-700 text-white h-screen p-6">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        🗂️ My Workspace
      </h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-2 hover:text-purple-300">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-purple-300">
          <ListTodo size={20} />
          <span>Tasks</span>
        </a>
        <a href="#" className="flex items-center gap-2 hover:text-purple-300">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
