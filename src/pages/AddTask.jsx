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

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handlePersonSelect = (name) => {
    setPersonInput(name);
    setForm({ ...form, assignedTo: name });
    setShowSuggestions(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(form);
    navigate("/");
  };

  const filteredPeople = people.filter((p) =>
    p.toLowerCase().includes(personInput.toLowerCase())
  );
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          Add New Task
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mt-2 mx-auto sm:mx-0"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Title */}
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Task Title"
            required
            className="w-full text-base placeholder-gray-500 focus:outline-none bg-transparent"
          />
        </div>

        {/* Description */}
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400">
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Add description..."
            rows="3"
            className="w-full text-sm placeholder-gray-500 focus:outline-none resize-none bg-transparent"
          />
        </div>

        {/* Status Buttons */}
        <div>
          <label className="text-sm font-medium text-gray-600">Status</label>
          <div className="flex flex-wrap gap-2 mt-1">
            {["pending", "in-progress", "completed"].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setForm({ ...form, status })}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 flex-1 text-center min-w-[100px] ${
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
        <div className="bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 flex items-center gap-2">
          <input
            type="date"
            name="date"
            value={form.date}
            min={today}
            onChange={handleChange}
            className="w-full text-sm focus:outline-none bg-transparent"
          />
        </div>

        {/* Assigned To */}
        <div className="relative">
          <div className="bg-gray-50 rounded-xl p-3 shadow-sm border border-gray-200 focus-within:ring-2 focus-within:ring-blue-400 flex items-center gap-2">
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
              className="w-full text-sm focus:outline-none bg-transparent"
            />
          </div>

          {showSuggestions && personInput && (
            <div className="absolute z-10 w-full mt-1 bg-gray-50 rounded-xl shadow-lg border border-gray-200 overflow-hidden text-sm max-h-40 overflow-y-auto">
              {filteredPeople.map((person, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer transition-colors duration-150"
                  onClick={() => handlePersonSelect(person)}
                >
                  {person}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
