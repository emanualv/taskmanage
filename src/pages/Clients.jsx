import React, { useState } from "react";
import { Save, X, Check } from "lucide-react";

export default function Clients({ addNewClient }) {
  const [formData, setFormData] = useState({
    name: "",
    pan: "",
    mobile: "",
    email: "",
    address1: "",
    address2: "",
    address3: "",
    age: "",
    profession: "",
    location: "",
    distanceFromThrissur: "",
    interestedIn: "",
    managedBy: "",
    otherRemarks: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const client = { ...formData, id: Date.now().toString() };
    addNewClient(client); // <-- Make sure this is called
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    handleClear();
    console.log(`addNewClient called with: ${JSON.stringify(client)}`);
    
  };

  const handleClear = () => {
    setFormData({
      name: "",
      pan: "",
      mobile: "",
      email: "",
      address1: "",
      address2: "",
      address3: "",
      age: "",
      profession: "",
      location: "",
      distanceFromThrissur: "",
      interestedIn: "",
      managedBy: "",
      otherRemarks: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Page Heading */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Add New Client
      </h1>

      {showSuccess && (
        <div className="fixed top-20 right-4 sm:right-8 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-pulse z-50">
          <Check className="w-5 h-5" />
          <span className="text-sm sm:text-base font-medium">Client added successfully!</span>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 bg-white shadow-lg rounded-2xl p-4 sm:p-6 border border-gray-200"
      >
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* PAN */}
        <input
          type="text"
          name="pan"
          placeholder="PAN Number"
          required
          value={formData.pan}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Mobile */}
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          required
          value={formData.mobile}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Address */}
        <input
          type="text"
          name="address1"
          placeholder="Address Line 1"
          required
          value={formData.address1}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
        <input
          type="text"
          name="address2"
          placeholder="Address Line 2"
          value={formData.address2}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />
        <input
          type="text"
          name="address3"
          placeholder="Address Line 3"
          value={formData.address3}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Age */}
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Profession */}
        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={formData.profession}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Location */}
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Distance */}
        <input
          type="number"
          name="distanceFromThrissur"
          placeholder="Distance from Thrissur"
          value={formData.distanceFromThrissur}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Interested In */}
        <input
          type="text"
          name="interestedIn"
          placeholder="Interested In"
          value={formData.interestedIn}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Managed By */}
        <input
          type="text"
          name="managedBy"
          placeholder="Managed By"
          value={formData.managedBy}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Other Remarks */}
        <textarea
          name="otherRemarks"
          placeholder="Other Remarks"
          rows="4"
          value={formData.otherRemarks}
          onChange={handleChange}
          className="w-full col-span-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 col-span-full">
          <button
            type="submit"
            className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <Save className="w-5 h-5" /> Save Client
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <X className="w-5 h-5" /> Clear
          </button>
        </div>
      </form>
    </div>
  );
}
