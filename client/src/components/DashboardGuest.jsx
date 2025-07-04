import { Link } from "react-router-dom";
import UseGetGuestBookings from "../hooks/booking/UseGetGuestBooking";
import Loading from "./Loading";
import { motion } from "framer-motion";

const highligt = "bg-pink text-white";

export default function DashboardGuest() {
  const { booking, handleSelectStatus, status } = UseGetGuestBookings();
  return (
    <>
      <h1 className="font-bold text-2xl ">My Bookings</h1>
      <div className="flex shadow-xl mt-10 py-2 justify-evenly rounded-xl  bg-white ">
        <button
          onClick={() => handleSelectStatus("pending")}
          className={`rounded-lg transition duration-300 px-10 hover:cursor-pointer ${
            status === "pending" ? highligt : undefined
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => handleSelectStatus("confirmed")}
          className={`rounded-lg transition duration-300 px-10 hover:cursor-pointer ${
            status === "confirmed" ? highligt : undefined
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => handleSelectStatus("success")}
          className={`rounded-lg transition duration-300 px-10 hover:cursor-pointer ${
            status === "success" ? highligt : undefined
          }`}
        >
          Completed
        </button>
      </div>
      <div className="max-h-[800px]  grid gap-5 pt-5 mt-10 pr-5 overflow-y-scroll">
        {!booking ? (
          <Loading />
        ) : (
          booking.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="grid   bg-white rounded-xl relative space-x-6 p-5 grid-cols-5"
            >
              <img
                src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${
                  item.listingId.imgUrl[0]
                }`}
                alt={item.listingId.imgUrl[0]}
                className="h-48 w-48 object-cover col-span-1 rounded-xl"
              />
              <div className="col-span-4">
                <div className="flex justify-between">
                  <h1 className="font-bold text-lg">{item.listingId.title}</h1>
                  <h1 className="text-gray-500">
                    Booking ID{" "}
                    <span className="font-bold text-black">{item._id}</span>
                  </h1>
                </div>
                <div className="text-xs text-gray-500">
                  <p>
                    {item.listingId.location.city},
                    {item.listingId.location.province}
                  </p>
                  <p className="text-black">{item.listingId.category}</p>
                </div>
                <div className="mt-5">
                  <p>Rp.{item.totalPrice.toLocaleString("id-ID")}</p>
                  <div className="flex justify-between text-sm mt-5">
                    <div>
                      <p className="text-gray-500">Check In</p>
                      <p>{new Date(item.checkIn).toDateString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Check Out</p>
                      <p>{new Date(item.checkOut).toDateString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Capacity</p>
                      <p>{item.listingId.capacity} Guest</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Status</p>
                      <p>{item.statusBooking}</p>
                    </div>
                  </div>
                  {status === "pending" && (
                    <Link
                      to={`../payment-bookings/${item._id}`}
                      className="absolute right-4 text-white bottom-5 bg-red-400 hover:bg-pink  px-2 rounded-lg transition-colors ease-in-out delay-350 "
                    >
                      Paynow
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </>
  );
}
