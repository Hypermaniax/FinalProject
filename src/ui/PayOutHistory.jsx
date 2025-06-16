const data = [
  {
    guest: "John D.",
    property: "Villa Ubud",
    checkIn: "May 21",
    checkOut: "May 24",
    amount: "$420",
    status: "Transfered",
  },
  {
    guest: "Lisa W.",
    property: "Kuta Loft",
    checkIn: "May 19",
    checkOut: "May 22",
    amount: "$610",
    status: "Pending",
  },
  {
    guest: "Anna S.",
    property: "Beach House",
    checkIn: "June 1",
    checkOut: "June 3",
    amount: "$330",
    status: "Transfered",
  },
  {
    guest: "Mark T.",
    property: "Jungle Retreat",
    checkIn: "June 3",
    checkOut: "June 5",
    amount: "$420",
    status: "Pending",
  },
];

export default function PayOutHistory() {
  return (
    <div className="text-black">
      <div className="flex font-bold mb-5">
        <h1 className="text-2xl">PayOuts History</h1>
        {/* <CircleUserRound /> */}
      </div>
      <section className="w-full">
        <div className="overflow-x-auto">
          <table className="min-w-full  text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-sm font-semibold text-black">
                <th>Guest</th>
                <th>Property</th>
                <th>Check – in</th>
                <th>Check – out</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="border-b border-gray-300 text-sm">
                  <td className="py-2 px-4">{row.guest}</td>
                  <td className="py-2 px-4">{row.property}</td>
                  <td className="py-2 px-4">{row.checkIn}</td>
                  <td className="py-2 px-4">{row.checkOut}</td>
                  <td className="py-2 px-4">{row.amount}</td>
                  <td
                    className={`py-2 px-4 font-medium ${
                      row.status === "Transfered"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
