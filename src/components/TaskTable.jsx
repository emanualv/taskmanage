import React from "react";

export default function TaskTable({ tasks, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-2 px-4">Task Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Assigned To</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr key={idx} className="text-center border-b">
              <td className="py-2 px-4">{task.name}</td>
              <td className="py-2 px-4">{task.description}</td>
              <td className="py-2 px-4">{task.assignedTo}</td>
              <td className="py-2 px-4">{task.status}</td>
              <td className="py-2 px-4 space-x-2">
                <button
                  onClick={() => onEdit(task)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(task)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {tasks.length === 0 && (
            <tr>
              <td colSpan="5" className="py-4 text-gray-500">No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
