import React, { useState } from "react";
import { Save, X, Check } from "lucide-react";

export default function Clients({ addNewClient }) {
  const [formData, setFormData] = useState({
    name: "",
    pan: "",
    mobile: "",
    email: "",
    address_1: "",
    address_2: "",
    address_3: "",
    managedBy: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = {
      id: Date.now(),
      ...formData,
    };

    addNewClient(newClient);

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    setFormData({
      name: "",
      pan: "",
      mobile: "",
      email: "",
      address_1: "",
      address_2: "",
      address_3: "",
      managedBy: "",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Add New Client
      </h1>

      {showSuccess && (
        <div className="fixed top-20 right-4 sm:right-8 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-pulse z-50">
          <Check className="w-5 h-5" />
          <span>Client added successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 bg-white shadow-lg rounded-2xl p-4 sm:p-6 border border-gray-200">
        <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" name="pan" placeholder="PAN Number" value={formData.pan} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" name="address_1" placeholder="Address Line 1" value={formData.address_1} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" name="address_2" placeholder="Address Line 2" value={formData.address_2} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" name="address_3" placeholder="Address Line 3" value={formData.address_3} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />
        <input type="text" name="managedBy" placeholder="Managed By" value={formData.managedBy} onChange={handleChange} className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 col-span-full">
          <button type="submit" className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 flex items-center justify-center gap-2">
            <Save className="w-5 h-5" /> Save Client
          </button>
          <button type="button" onClick={() => setFormData({ name: "", pan: "", mobile: "", email: "", address_1: "", address_2: "", address_3: "", managedBy: "" })} className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 flex items-center justify-center gap-2">
            <X className="w-5 h-5" /> Clear
          </button>
        </div>
      </form>
    </div>
  );
}
