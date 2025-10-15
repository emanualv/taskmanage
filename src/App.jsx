import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";

function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200 p-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
      <div className="text-2xl sm:text-3xl font-semibold text-gray-800 tracking-wide">
        Task<span className="text-blue-600">Manager</span>
      </div>
      <div className="flex space-x-4 sm:space-x-8">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          Dashboard
        </Link>
        <Link
          to="/add"
          className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
        >
          Add Task
        </Link>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 sm:p-8">
        <div className="animate-fade-in">
          <Routes>
            <Route
              path="/"
              element={
                <div className="bg-white/95 shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-100 transition-transform hover:scale-[1.01]">
                  <Dashboard />
                </div>
              }
            />
            <Route
              path="/add"
              element={
                <div className="bg-white/95 shadow-xl rounded-2xl p-6 sm:p-10 border border-gray-100 transition-transform hover:scale-[1.01]">
                  <AddTask />
                </div>
              }
            />
          </Routes>
        </div>
      </main>
    </div>
  );
}
