import { Dot } from "lucide-react";
import profile from "../../assets/spongebob.jpeg";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import GridSwiper from "../../ui/GridSwiper";
import WrapperContent from "../../ui/WrapperContent";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";
import UseListingDetail from "../../hooks/UseListingsDetail";
import UseBookings from "../../hooks/UseBookings";
import { AuthContext } from "../../routes/AuthContext";

export default function BookingDetails() {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const { id } = useParams();
  const { hotel, loading } = UseListingDetail(id);

  const { handleSubmit } = UseBookings();

  const { user } = useContext(AuthContext);

  if (loading) return <Loading />;

  const formatted = new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(hotel.price);

  const requestData = {
    checkIn: checkIn?.toDateString(),
    checkOut: checkOut?.toDateString(),
    listingId: hotel._id,
    guestId: user?.guest._id,
    totalPrice: hotel.price,
  };

  return (
    <>
      <WrapperContent>
        <GridSwiper />
        <section className="grid grid-cols-6 gap-20 mt-5">
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
              <div className="flex items-center gap-2 mt-5">
                <img
                  src={profile}
                  alt={profile}
                  className="h-20 w-20 object-cover rounded-full"
                />
                <div className="">
                  <p className="text-lg">Hosted by {hotel.host.username}</p>
                  <p className="text-sm text-slate-500">6 years Hosting</p>
                </div>
              </div>
            </header>
            <dl className="py-4 border-t-2 mt-5">{hotel.description}</dl>
          </div>
          <div className="col-span-2 ">
            <div className="w-80 p-4 rounded-xl shadow-md border bg-white">
              <div className="mb-4">
                <span className="text-lg font-semibold">
                  <span className="underline">Rp.{formatted}</span>
                </span>
                <span className="text-sm text-gray-600"> for 1 night</span>
              </div>

              <div className="border rounded-xl overflow-hidden divide-y">
                <div className="grid grid-cols-2 divide-x">
                  <DatePicker
                    selected={checkIn}
                    minDate={new Date()}
                    // excludeDates={excludeDates}
                    onChange={(date) => setCheckIn(date)}
                    placeholderText="Check In"
                    className="w-full p-2 text-sm outline-none"
                  />
                  <DatePicker
                    selected={checkOut}
                    minDate={new Date()}
                    // excludeDates={excludeDates}
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
                onClick={() => handleSubmit(requestData)}
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
              {/* {data.facility.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))} */}
            </ul>
          </div>
        </section>
      </WrapperContent>
    </>
  );
}
