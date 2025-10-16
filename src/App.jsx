import React, { useMemo, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import Clients from "./pages/Clients";
import ClientList from "./pages/ClientList";

function Navbar() {
  const [clientMenuOpen, setClientMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 p-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 sticky top-0 z-30">
      <div className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">
        Task<span className="text-blue-600">Manager</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-2 sm:mt-0 relative">
        <a
          href="/"
          className="text-gray-700 hover:text-blue-600 font-medium text-base sm:text-lg transition-colors duration-200"
        >
          Dashboard
        </a>

        <a
          href="/add"
          className="text-gray-700 hover:text-blue-600 font-medium text-base sm:text-lg transition-colors duration-200"
        >
          Tasks
        </a>

        {/* Clients Dropdown */}
        <div className="relative">
          <button
            onClick={() => setClientMenuOpen(!clientMenuOpen)}
            className="text-gray-700 hover:text-blue-600 font-medium text-base sm:text-lg transition-colors flex items-center gap-1"
          >
            Clients ▾
          </button>

          {clientMenuOpen && (
            <div
              onMouseLeave={() => setClientMenuOpen(false)}
              className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-40 z-50"
            >
              <a
                href="/clients"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Add Client
              </a>
              <a
                href="/client-list"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                Client List
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

// Page Wrapper for consistent styling
const PageWrapper = ({ children }) => (
  <div className="bg-white/95 shadow-2xl rounded-2xl p-5 sm:p-10 border border-gray-100 transition-transform hover:scale-[1.01] duration-300">
    {children}
  </div>
);

// Main App Component
export default function App() {
  const [clients, setClients] = useState(() => {
  const saved = localStorage.getItem("clients");
  return saved ? JSON.parse(saved) : [];
});

const addNewClient = (client) => {
  setClients((prev) => {
    const updated = [...prev, client];
    localStorage.setItem("clients", JSON.stringify(updated));
    return updated;
  });
};

  const floatingShapes = useMemo(
    () =>
      Array.from({ length: 25 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 40 + Math.random() * 80,
        opacity: 0.35 + Math.random() * 0.3,
        delay: Math.random() * 5,
        rotation: Math.random() * 360,
        color:
          Math.random() > 0.5
            ? "rgba(255,255,255,0.6)"
            : "rgba(255,255,255,0.4)",
      })),
    []
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-500 via-teal-400 to-gray-100">
      {/* Floating shapes */}
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
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Dashboard />
                </PageWrapper>
              }
            />
            <Route
              path="/add"
              element={
                <PageWrapper>
                  <AddTask />
                </PageWrapper>
              }
            />
            <Route
              path="/clients"
              element={
                <PageWrapper>
                  <Clients addNewClient={addNewClient} />
                </PageWrapper>
              }
            />
            <Route
              path="/client-list"
              element={
                <PageWrapper>
                  <ClientList clients={clients} />
                </PageWrapper>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
