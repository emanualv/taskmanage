import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Clients({ addNewClient }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    pan: "",
    mobile: "",
    email: "",
    address1: "",
    address2: "",
    address3: "",
    age: "",
    profession: "",
    location: "",
    distance: "",
    interest: "",
    manager: "",
    remarks: "",
  });
  const [notification, setNotification] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewClient(form); // Add to client list in App.jsx or context
    setNotification("New client added successfully!");
    setForm({
      fullName: "",
      pan: "",
      mobile: "",
      email: "",
      address1: "",
      address2: "",
      address3: "",
      age: "",
      profession: "",
      location: "",
      distance: "",
      interest: "",
      manager: "",
      remarks: "",
    });
    setTimeout(() => {
      setNotification("");
      navigate("/client-list");
    }, 1500);
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg mx-auto px-4 sm:px-6 py-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
        Add New Client
      </h1>
      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-6"></div>

      {notification && (
        <div className="mb-4 text-green-700 bg-green-100 p-2 rounded-lg text-center">
          {notification}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {[
          { name: "fullName", placeholder: "Full Name *", required: true },
          { name: "pan", placeholder: "PAN Number *", required: true },
          { name: "mobile", placeholder: "Mobile Number *", required: true },
          { name: "email", placeholder: "Email Address" },
          { name: "address1", placeholder: "Address Line 1 *", required: true },
          { name: "address2", placeholder: "Address Line 2" },
          { name: "address3", placeholder: "Address Line 3" },
          { name: "age", placeholder: "Age", type: "number" },
          { name: "profession", placeholder: "Profession" },
          { name: "location", placeholder: "Location" },
          { name: "distance", placeholder: "Distance from Thrissur (km)" },
          { name: "interest", placeholder: "Interested In" },
          { name: "manager", placeholder: "Managed By" },
        ].map((field) => (
          <input
            key={field.name}
            type={field.type || "text"}
            name={field.name}
            value={form[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required || false}
            className="w-full p-2 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
        ))}

        <textarea
          name="remarks"
          placeholder="Other Remarks"
          value={form.remarks}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-blue-400 text-sm sm:text-base resize-none"
        />

        <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95">
          Save Client
        </button>
      </form>
    </div>
  );
}
