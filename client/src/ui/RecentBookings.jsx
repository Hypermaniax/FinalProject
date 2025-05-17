export default function RecentBookings({ bookings }) {
    return (
      <div className="px-4 py-8 bg-[#F5F5F5] col-span-4 shadow-lg rounded-2xl">
        <h5 className="font-bold mb-5 text-2xl">Recent Bookings</h5>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm">
            <thead>
              <tr className="text-left text-gray-600 font-semibold">
                <th className="px-4 py-2">Guest</th>
                <th className="px-4 py-2">Property</th>
                <th className="px-4 py-2">Dates</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td className="px-4 py-2 font-medium text-gray-800">{item.guest}</td>
                  <td className="px-4 py-2 text-gray-800">{item.property}</td>
                  <td className="px-4 py-2 text-gray-800">{item.dates}</td>
                  <td className="px-4 py-2 text-gray-800">{item.duration}</td>
                  <td
                    className={`px-4 py-2 font-semibold ${
                      item.status === "Confirmed" ? "text-yellow-600" : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  