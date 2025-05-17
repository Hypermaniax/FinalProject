import { useContext, useEffect, useState } from "react";
import Input from "./Input";
import { ProtectContext } from "./ProtectedRoute";

export default function TableHost() {
  const protect = useContext(ProtectContext);
  return (
    <div className="bg-white p-5 mt-24 rounded-xl  shadow-md ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Hotel List</h2>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-black px-4 py-2 border rounded-md hover:bg-blue-700 transition-colors">
            Add Hotel
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-3 text-gray-700 font-semibold border-b">
                No
              </th>
              <th className="px-4 py-3 text-gray-700 font-semibold border-b">
                Hotel
              </th>
              <th className="px-4 py-3 text-gray-700 font-semibold border-b">
                Category
              </th>
              <th className="px-4 py-3 text-gray-700 font-semibold border-b">
                Last Update
              </th>
              <th className="px-4 py-3 text-gray-700 font-semibold border-b">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {protect.map((hotel, index) => (
              <tr
                key={hotel._id}
                className="hover:bg-darkWhite transition-colors"
              >
                <td className="px-4 py-3 border-b">{index + 1}</td>
                <td className="px-4 py-3 border-b font-medium">
                  {hotel.title}
                </td>
                <td className="px-4 py-3 border-b">{hotel.category}</td>
                <td className="px-4 py-3 border-b">
                  {new Date(hotel.updatedAt).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </td>
                <td className="px-4 py-3 border-b">
                  <button className="text-blue-600 hover:bg-pink transition-colors hover:text-white p-2 rounded-lg font-semibold mr-2">
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm mt-5 text-gray-600">
        Showing {protect.length} hotels
      </p>
    </div>
  );
}
