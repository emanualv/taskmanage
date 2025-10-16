import React, { useState } from "react";
import { addTask } from "../api/tasks";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const navigate = useNavigate();
  const [people] = useState(["Alice", "Bob", "Charlie"]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    status: "pending",
    assignedTo: "",
  });
  const [personInput, setPersonInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [notification, setNotification] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handlePersonSelect = (name) => {
    setPersonInput(name);
    setForm({ ...form, assignedTo: name });
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(form);
    setNotification("Task added successfully!");
    setTimeout(() => navigate("/"), 1500);
  };

  const filteredPeople = people.filter((p) =>
    p.toLowerCase().includes(personInput.toLowerCase())
  );

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
        Add New Task
      </h1>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"></div>

      {/* Notification */}
      {notification && (
        <div className="mb-4 text-green-700 bg-green-100 p-2 rounded-lg text-center">
          {notification}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
          className="w-full p-2 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Description */}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Add description..."
          rows="3"
          className="w-full p-2 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base resize-none"
        />

        {/* Status */}
        <div>
          <label className="text-sm font-medium text-gray-600">Status</label>
          <div className="flex flex-col sm:flex-row gap-2 mt-1">
            {["pending", "in-progress", "completed"].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setForm({ ...form, status })}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 flex-1 text-center min-w-[100px] ${
                  form.status === status
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Due Date */}
        <div className="flex flex-col">
          <label htmlFor="date" className="mb-1 font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            min={today}
            className="w-full sm:w-1/2 p-2 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
            required
          />
        </div>

        {/* Assign To */}
        <div className="relative">
          <input
            type="text"
            value={personInput}
            onChange={(e) => {
              setPersonInput(e.target.value);
              setForm({ ...form, assignedTo: e.target.value });
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Assign to..."
            className="w-full p-2 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
          {showSuggestions && personInput && (
            <div className="absolute z-10 w-full mt-1 bg-gray-50 rounded-xl shadow-lg border border-gray-200 overflow-hidden text-sm max-h-40 overflow-y-auto">
              {filteredPeople.map((person, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handlePersonSelect(person)}
                >
                  {person}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95">
          Add Task
        </button>
      </form>
    </div>
  );
}
