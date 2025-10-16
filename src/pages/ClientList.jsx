import React from "react";
import { Edit2, Trash2 } from "lucide-react";

export default function ClientList({ clients }) {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Client List
      </h1>

      {clients.length === 0 ? (
        <p className="text-gray-600 text-sm sm:text-base">
          No clients added yet. Add a client to see them listed here.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md text-sm sm:text-base">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">PAN</th>
                <th className="p-3 text-left">Mobile</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Manager</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr
                  key={client.id}
                  className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3">{client.name}</td>
                  <td className="p-3">{client.pan}</td>
                  <td className="p-3">{client.mobile}</td>
                  <td className="p-3">{client.email}</td>
                  <td className="p-3">{client.location}</td>
                  <td className="p-3">{client.managedBy}</td>
                  <td className="p-3 flex gap-2">
                    <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
