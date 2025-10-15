import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";

function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200 p-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 relative z-20">
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
  // Generate floating shapes dynamically
  const floatingShapes = Array.from({ length: 15 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 20 + Math.random() * 30,
    opacity: 0.15 + Math.random() * 0.25,
    delay: Math.random() * 5,
  }));

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-500 via-teal-400 to-gray-100">
      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, idx) => (
        <div
          key={idx}
          className="absolute bg-white/20 rounded-lg shadow-md animate-float-slow"
          style={{
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            opacity: shape.opacity,
            animationDelay: `${shape.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10">
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
    </div>
  );
}
