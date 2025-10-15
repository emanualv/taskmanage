import React, { useEffect, useState } from "react";
import { getTasks } from "../api/tasks";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.status === "completed").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;
  const pending = tasks.filter((t) => t.status === "pending").length;

  return (
    <div className="p-2 sm:p-4 md:p-6">
      {/* Header with Add button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 tracking-tight text-center sm:text-left">
          Dashboard
        </h1>
      </div>

      {/* Task Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-xl font-semibold text-gray-800">{total}</p>
        </div>
        <div className="bg-green-50 rounded-xl shadow-sm border border-green-100 p-4 text-center">
          <p className="text-sm text-gray-500">Completed</p>
          <p className="text-xl font-semibold text-green-700">{completed}</p>
        </div>
        <div className="bg-yellow-50 rounded-xl shadow-sm border border-yellow-100 p-4 text-center">
          <p className="text-sm text-gray-500">In Progress</p>
          <p className="text-xl font-semibold text-yellow-700">{inProgress}</p>
        </div>
        <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-100 p-4 text-center">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-xl font-semibold text-blue-700">{pending}</p>
        </div>
      </div>

      {/* Task List */}
      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
       
          <p className="text-lg font-medium">No tasks yet</p>
          <p className="text-sm mt-1">Add a new one to get started</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white/95 shadow-md hover:shadow-lg rounded-xl p-5 border border-gray-100 hover:-translate-y-1 transition-all animate-fade-in"
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {task.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {task.description || "No description provided."}
              </p>

              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">🗓 {task.date || "No date"}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : task.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {task.status || "pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
