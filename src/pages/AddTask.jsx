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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  // Get today's date in YYYY-MM-DD format for the date input min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="px-4 py-2">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Add Task
          <div className="w-20 h-1 bg-blue-600 rounded-full mt-2"></div>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Task Title */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Task Title"
            required
            className="w-full text-lg font-medium placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Add description..."
            rows="3"
            className="w-full text-base placeholder-gray-400 focus:outline-none resize-none"
          />
        </div>

        {/* Quick Status Buttons */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-600">Status</label>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {['pending', 'in-progress', 'completed'].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => setForm({ ...form, status })}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium ${
                  form.status === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Due Date with Calendar Icon */}
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-gray-400 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input
              type="date"
              name="date"
              value={form.date}
              min={today}
              onChange={handleChange}
              className="w-full focus:outline-none text-gray-600"
            />
          </div>
        </div>

        {/* Assigned To with Autocomplete */}
        <div className="relative">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
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
                className="w-full focus:outline-none"
              />
            </div>
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && personInput && (
            <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
              {filteredPeople.map((person, idx) => (
                <div
                  key={idx}
                  className="px-4 py-3 hover:bg-gray-50 active:bg-gray-100 cursor-pointer flex items-center space-x-3"
                  onClick={() => handlePersonSelect(person)}
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-medium">
                      {person.charAt(0)}
                    </span>
                  </div>
                  <span className="text-gray-700">{person}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button - Fixed at Bottom */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg shadow-md active:bg-blue-700 transform active:scale-[0.98] transition-all"
          >
            Add Task
          </button>
        </div>
        
        {/* Spacer for fixed button */}
        <div className="h-20"></div>
      </form>
    </div>
  );
}