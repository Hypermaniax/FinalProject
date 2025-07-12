import { Dot } from "lucide-react";
import profile from "../../assets/spongebob.jpeg";
import { useState } from "react";
import GridSwiper from "../../components/GridSwiper";
import WrapperContent from "../../components/WrapperContent";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import UseListingDetail from "../../hooks/listing/UseListingsDetail";
import UseBookings from "../../hooks/booking/UseBookings";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function BookingDetails() {
  const [guests, setGuests] = useState(1);
  const { id } = useParams();
  const { hotel, loading, booked, formatted } = UseListingDetail(id);
  const { handleSubmit } = UseBookings();
  const [showCalender, setShowCalender] = useState(false);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  if (loading) return <Loading />;
  
  const dataBookings = {
    checkIn: range[0].startDate,
    checkOut: range[0].endDate,
    listingId: hotel._id,
    numGuest: guests,
  };
  
  return (
    <>
      <WrapperContent>
        <GridSwiper imgUrl={hotel.imgUrl} />
        <section className="grid relative grid-cols-6 gap-20 mt-5">
          <div className="col-span-4">
            <header>
              <h1 className="text-3xl font-semibold">{hotel.title}</h1>
              <div className="flex  text-slate-500">
                <p>{hotel.category}</p>
                <Dot />
                <p>capacity Guest {hotel.capacity}</p>
                <Dot />
                <p>6 Bedroom</p>
                <Dot />
                <p>6 bathroom</p>
              </div>
              <div className="flex hotels-center gap-2 mt-5">
                <img
                  src={profile}
                  alt={profile}
                  className="h-20 w-20 object-cover rounded-full"
                />
                <div className="">
                  <p className="text-lg">Hosted by {hotel.hostId.name}</p>
                  <p className="text-sm text-slate-500">6 years Hosting</p>
                </div>
              </div>
            </header>
            <dl className="py-4 border-t-2 mt-5">{hotel.description}</dl>
            <div className="border-t-2 py-4 space-y-4  mt-5">
              <h1 className="text-lg font-bold">Address</h1>
              <dl>
                {hotel.location.province},{hotel.location.city},
                {hotel.location.address}
              </dl>
            </div>
          </div>
          <div className="col-span-2 ">
            <div className="w-80 p-4 rounded-xl shadow-md border bg-white">
              <div className="mb-4">
                <span className="text-lg font-semibold">
                  <span className="underline">Rp.{formatted}</span>
                </span>
                <span className="text-sm text-gray-600"> for 1 night</span>
              </div>

              <div className="border  rounded-xl overflow-hidden divide-y">
                <div
                  onClick={() => setShowCalender(!showCalender)}
                  className="grid grid-cols-2 divide-x"
                >
                  <div className="p-2 text-sm">
                    <p className="text-gray-400 text-xs">Check In</p>
                    <p className="font-medium">
                      {range[0].startDate.toLocaleDateString("en-US")}
                    </p>
                  </div>
                  <div className="p-2 text-sm">
                    <p className="text-gray-400 text-xs">Check Out</p>
                    <p className="font-medium">
                      {range[0].endDate.toLocaleDateString("en-US")}
                    </p>
                  </div>
                </div>
                {showCalender && (
                  <div className="mt-18 absolute right-16 bg-white p-5 rounded-xl flex flex-col">
                    <DateRange
                      showMonthAndYearPickers={false}
                      disabledDates={booked}
                      editableDateInputs={true}
                      onChange={(item) => setRange([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={range}
                      months={2}
                      direction="horizontal"
                      minDate={new Date()}
                    />
                    <div className="text-end">
                      <button
                        className=" mt-4 bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded-md transition font-medium"
                        onClick={() => setShowCalender(!showCalender)}
                      >
                        close
                      </button>
                    </div>
                  </div>
                )}
                <div>
                  <input
                    type="number"
                    min={1}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full p-2 text-sm outline-none"
                    placeholder="Guest"
                  />
                </div>
              </div>

              <button
                onClick={() => handleSubmit(dataBookings)}
                className="w-full mt-4 bg-red-400 hover:bg-red-500 text-white py-2 rounded-md transition"
              >
                Rent Now
              </button>
            </div>
          </div>
        </section>
        <section className="flex border-t py-4  border-b justify-between">
          <div className="flex-1">
            <h1 className="text-lg font-bold">What this Space Offers</h1>
            <ul className="grid  grid-cols-2 gap-2 max-w-80 my-2">
              {hotel.facility.map((hotel, index) => (
                <li className="" key={index}>
                  {hotel}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold">Space Rules</h1>
            <div className="grid gap-2 my-2">
              <p>Check-In After {hotel.rules.checkIn} </p>
              <p>Check-Out Before {hotel.rules.checkOut} </p>
              <p>
                Quite Hour {hotel.rules.nightTime[0]} -{" "}
                {hotel.rules.nightTime[1]}
              </p>
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold">Additional Rules</h1>
            <div className="grid gap-2 my-2">
              <p>{hotel.rules.additional}</p>
            </div>
          </div>
        </section>
      </WrapperContent>
    </>
  );
}