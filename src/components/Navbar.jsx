import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clientMenuOpen, setClientMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setClientMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md border-b border-gray-200 p-4 sm:px-8 sticky top-0 z-30">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-semibold text-gray-800 tracking-wide">
            Task<span className="text-blue-600">Manager</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-6">
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

            {/* Clients Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseLeave={() => setClientMenuOpen(false)}
            >
              <button
                onClick={() => setClientMenuOpen(!clientMenuOpen)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 flex items-center gap-1"
              >
                Clients ▾
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transform transition-all duration-300 ease-in-out
                  ${clientMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                `}
              >
                <Link
                  to="/clients"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setClientMenuOpen(false)}
                >
                  Add Client
                </Link>
                <Link
                  to="/client-list"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setClientMenuOpen(false)}
                >
                  Client List
                </Link>
              </div>
            </div>
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
        <div
          className={`sm:hidden mt-4 py-2 border-t border-gray-100 transform transition-all duration-300 ease-in-out
            ${isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
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
          {/* Mobile Clients Menu */}
          <div className="border-t border-gray-100 pt-2">
            <button
              onClick={() => setClientMenuOpen(!clientMenuOpen)}
              className="w-full text-left px-2 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors duration-200 flex justify-between items-center"
            >
              Clients ▾
            </button>
            <div
              className={`mt-1 pl-4 transform transition-all duration-300 ease-in-out
                ${clientMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
              `}
            >
              <Link
                to="/clients"
                onClick={() => {
                  setClientMenuOpen(false);
                  setIsMenuOpen(false);
                }}
                className="block px-2 py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors duration-200"
              >
                Add Client
              </Link>
              <Link
                to="/client-list"
                onClick={() => {
                  setClientMenuOpen(false);
                  setIsMenuOpen(false);
                }}
                className="block px-2 py-1 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg font-medium transition-colors duration-200"
              >
                Client List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
