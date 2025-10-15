import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200 p-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-semibold text-gray-800 tracking-wide">
            Task<span className="text-blue-600">Manager</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex space-x-8">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4 py-2 space-y-3 border-t border-gray-100">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors duration-200"
            >
              Dashboard
            </Link>
            <Link
              to="/add"
              onClick={() => setIsMenuOpen(false)}
              className="block px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors duration-200"
            >
              Add Task
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;