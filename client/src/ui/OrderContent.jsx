import { Dot } from "lucide-react";
import profile from "../assets/damn.png";
import DatePicker from "react-datepicker";
import { useState } from "react";

export default function OrderContent() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  return (
    <>
      <section className="grid grid-cols-6 gap-20 mt-5">
        <div className="col-span-4">
          <header>
            <h1 className="text-3xl font-semibold">Villa Kaliurang 17</h1>
            <div className="flex  text-slate-500">
              <p>privete Villas</p>
              <Dot />
              <p>6 Guest</p>
              <Dot />
              <p>6 Bedroom</p>
              <Dot />
              <p>6 bathroom</p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <img
                src={profile}
                alt={profile}
                className="h-20 w-20 rounded-full"
              />
              <div className="">
                <p className="text-lg">Hosted Hendra By and Family</p>
                <p className="text-sm text-slate-500">6 years Hosting</p>
              </div>
            </div>
          </header>
          <dl className="py-4 border-t-2 mt-5">
            Set on the pristine shores of Lake Toba, this charming lakeside
            cottage is a hidden gem for travelers looking to unwind in complete
            serenity. Designed with a fusion of Batak architecture and modern
            comfort, the cottage features vaulted ceilings, bamboo detailing,
            and an open-air bathroom with a view of the lake. The large veranda
            invites you to spend your mornings sipping coffee as mist rises over
            the water, and your evenings watching stars reflect off the lake’s
            surface. The cottage offers two cozy bedrooms, a fully equipped
            kitchenette, a hammock corner, and a canoe for lakeside exploration.
            With minimal distractions, no traffic noise, and limited cell
            signal, it’s the perfect digital detox destination. Private yoga
            sessions, organic meals, and cultural storytelling evenings can be
            arranged upon request.
          </dl>
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
                  onChange={(date) => setCheckIn(date)}
                  placeholderText="Check In"
                  className="w-full p-2 text-sm outline-none"
                />
                <DatePicker
                  selected={checkOut}
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

            <button className="w-full mt-4 bg-red-400 hover:bg-red-500 text-white py-2 rounded-md transition">
              Rent Now
            </button>
          </div>
        </div>
      </section>
      <section className="grid border-t py-4  border-b grid-cols-4">
        <div className="col-span-1">
            <h1 className="text-lg">What this Space Offers</h1>
            <div className="grid min:w-60 grid-cols-2">
                <p>wifi</p>
                <p>wifi</p>
                <p>wifi</p>
                <p>wifi</p>
                <p>wifi</p>
                <p>wifi</p>
                <p>wifi</p>
            </div>
        </div>
      </section>
    </>
  );
}
