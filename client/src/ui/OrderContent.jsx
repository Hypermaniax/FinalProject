import { Dot } from "lucide-react";
import profile from "../assets/spongebob.jpeg";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useToggle from "../hooks/UseToggle";
import GridSwiper from "./GridSwiper";
import RequestToBook from "./RequestTobook";

export default function OrderContent({ data }) {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);

  const booksDate = { checkIn, checkOut };

  const bookedDates = [
    [
      new Date("Tue Jun 10 2025 00:00:00 GMT+0700 (Western Indonesia Time)"),
      new Date("Thu Jun 12 2025 00:00:00 GMT+0700 (Western Indonesia Time)"),
    ],
    [
      new Date("Tue Jun 15 2025 00:00:00 GMT+0700 (Western Indonesia Time)"),
      new Date("Thu Jun 20 2025 00:00:00 GMT+0700 (Western Indonesia Time)"),
    ],
  ];

  function getExcludedDates(ranges) {
    const excluded = [];

    ranges.forEach(([start, end]) => {
      const current = new Date(start);
      const last = new Date(end);

      while (current <= last) {
        excluded.push(new Date(current));
        current.setDate(current.getDate() + 1);
      }
    });

    return excluded;
  }

  const excludeDates = getExcludedDates(bookedDates);

  const handleClick = () => {
    if (!checkIn && !checkOut) return;
    toggle();
  };

  const { toggle, state } = useToggle();

  return (
    <>
      {state ? (
        <RequestToBook data={data} date={booksDate} back={toggle} />
      ) : (
        <>
          <GridSwiper data={data} />
          <section className="grid grid-cols-6 gap-20 mt-5">
            <div className="col-span-4">
              <header>
                <h1 className="text-3xl font-semibold">{data.title}</h1>
                <div className="flex  text-slate-500">
                  <p>{data.category}</p>
                  <Dot />
                  <p>{data.capacity} Guest</p>
                  <Dot />
                  <p>6 Bedroom</p>
                  <Dot />
                  <p>6 bathroom</p>
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    src={profile}
                    alt={profile}
                    className="h-20 w-20 object-cover rounded-full"
                  />
                  <div className="">
                    <p className="text-lg">Hosted by {data.host.username}</p>
                    <p className="text-sm text-slate-500">6 years Hosting</p>
                  </div>
                </div>
              </header>
              <dl className="py-4 border-t-2 mt-5">{data.description}</dl>
            </div>
            <div className="col-span-2 ">
              <div className="w-80 p-4 rounded-xl shadow-md border bg-white">
                <div className="mb-4">
                  <span className="text-lg font-semibold">
                    <span className="underline">Rp5,000,000</span>
                  </span>
                  <span className="text-sm text-gray-600"> for 1 night</span>
                </div>

                <div className="border rounded-xl overflow-hidden divide-y">
                  <div className="grid grid-cols-2 divide-x">
                    <DatePicker
                      selected={checkIn}
                      minDate={new Date()}
                      excludeDates={excludeDates}
                      onChange={(date) => setCheckIn(date)}
                      placeholderText="Check In"
                      className="w-full p-2 text-sm outline-none"
                    />
                    <DatePicker
                      selected={checkOut}
                      minDate={new Date()}
                      excludeDates={excludeDates}
                      onChange={(date) => setCheckOut(date)}
                      placeholderText="Check Out"
                      className="w-full p-2 text-sm outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      min="1"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full p-2 text-sm outline-none"
                      placeholder="Guest"
                    />
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="w-full mt-4 bg-red-400 hover:bg-red-500 text-white py-2 rounded-md transition"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </section>
          <section className="grid border-t py-4  border-b grid-cols-4">
            <div className="col-span-1">
              <h1 className="text-lg">What this Space Offers</h1>
              <ul className="grid min:w-60 grid-cols-2 gap-2">
                {data.facility.map((item, index) => (
                  <li className="" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </>
      )}
    </>
  );
}
