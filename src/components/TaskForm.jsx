import React, { useState } from "react";

export default function TaskForm({ onSubmit, taskData, users }) {
  const [task, setTask] = useState(taskData || {
    name: "",
    description: "",
    assignedTo: users[0] || "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ name: "", description: "", assignedTo: users[0] || "", status: "Pending" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Task Name</label>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          required
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Assigned To</label>
        <select
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          {users.map((user, idx) => (
            <option key={idx} value={user}>{user}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Status</label>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
