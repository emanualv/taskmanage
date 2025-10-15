import React, { useEffect, useState } from "react";
import { getTasks } from "../api/tasks";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6 tracking-tight">
        Dashboard
      </h1>

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <p className="text-lg font-medium">No tasks yet</p>
          <p className="text-sm mt-1">Add a new one to get started 🚀</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl transition-all rounded-xl p-5 border border-gray-100 hover:-translate-y-1"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {task.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                {task.description || "No description provided."}
              </p>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">
                  🗓 {task.date || "No date"}
                </span>
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
