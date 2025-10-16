import React from "react";

export default function ClientList({ clients }) {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
        Client List
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-lg border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {[
                "Full Name",
                "PAN",
                "Mobile",
                "Email",
                "Address",
                "Age",
                "Profession",
                "Location",
                "Distance",
                "Interest",
                "Manager",
                "Remarks",
              ].map((header) => (
                <th
                  key={header}
                  className="px-3 py-2 text-left text-sm font-medium text-gray-700"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {clients.length === 0 && (
              <tr>
                <td
                  colSpan="12"
                  className="text-center py-4 text-gray-500 text-sm"
                >
                  No clients added yet.
                </td>
              </tr>
            )}
            {clients.map((client, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-3 py-2 text-sm">{client.fullName}</td>
                <td className="px-3 py-2 text-sm">{client.pan}</td>
                <td className="px-3 py-2 text-sm">{client.mobile}</td>
                <td className="px-3 py-2 text-sm">{client.email}</td>
                <td className="px-3 py-2 text-sm">
                  {client.address1} {client.address2} {client.address3}
                </td>
                <td className="px-3 py-2 text-sm">{client.age}</td>
                <td className="px-3 py-2 text-sm">{client.profession}</td>
                <td className="px-3 py-2 text-sm">{client.location}</td>
                <td className="px-3 py-2 text-sm">{client.distance}</td>
                <td className="px-3 py-2 text-sm">{client.interest}</td>
                <td className="px-3 py-2 text-sm">{client.manager}</td>
                <td className="px-3 py-2 text-sm">{client.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
