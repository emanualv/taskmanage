import React, { useMemo } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";

function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 p-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 sticky top-0 z-30">
      <div className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">
        Task<span className="text-blue-600">Manager</span>
      </div>
      <div className="flex space-x-5 sm:space-x-8 mt-2 sm:mt-0">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 font-medium text-base sm:text-lg transition-colors duration-200"
        >
          Dashboard
        </Link>
        <Link
          to="/add"
          className="text-gray-700 hover:text-blue-600 font-medium text-base sm:text-lg transition-colors duration-200"
        >
          Add Task
        </Link>
      </div>
    </nav>
  );
}

// Optional wrapper to style pages consistently
const PageWrapper = ({ children }) => (
  <div className="bg-white/95 shadow-2xl rounded-2xl p-5 sm:p-10 border border-gray-100 transition-transform hover:scale-[1.01] duration-300">
    {children}
  </div>
);

export default function App() {
  // Floating geometric shapes - brighter and larger
  const floatingShapes = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 40 + Math.random() * 80, // bigger squares
        opacity: 0.35 + Math.random() * 0.3, // more visible
        delay: Math.random() * 5,
        rotation: Math.random() * 360,
        color: Math.random() > 0.5 ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.4)",
      })),
    []
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-500 via-teal-400 to-gray-100">
      {/* Floating squares background */}
      {floatingShapes.map((shape, idx) => (
        <div
          key={idx}
          className="absolute rounded-xl shadow-2xl animate-float-slow"
          style={{
            top: `${shape.top}%`,
            left: `${shape.left}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: shape.color,
            opacity: shape.opacity,
            transform: `rotate(${shape.rotation}deg)`,
            animationDelay: `${shape.delay}s`,
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255,255,255,0.7)",
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full max-w-6xl mx-auto p-4 sm:p-8">
          <div className="animate-fade-in">
            <Routes>
              {/* Dashboard is the homepage */}
              <Route path="/" element={<PageWrapper><Dashboard /></PageWrapper>} />

              {/* AddTask page */}
              <Route path="/add" element={<PageWrapper><AddTask /></PageWrapper>} />

              {/* Redirect all unknown routes to Dashboard */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}
