import { Link } from "react-router-dom";
import UseGetGuestBookings from "../hooks/booking/UseGetGuestBooking";
import Loading from "./Loading";
import { motion } from "framer-motion";
import { Receipt } from "lucide-react";
const highligt = "bg-pink text-white";

export default function DashboardGuest() {
  const { booking, handleSelectStatus, status } = UseGetGuestBookings();
  const isEmpty = booking && booking.length === 0;
  return (
    <div className="sm:mx-0 mx-5 sm:mt-0 mt-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-2xl sm:text-3xl">My Bookings</h1>
        {booking && booking.length > 0 && (
          <span className="text-sm text-gray-500">
            {booking.length} transaction{booking.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>
      <div className="flex shadow-xl mt-10 py-2 justify-evenly rounded-xl overflow-hidden bg-white ">
        <button
          onClick={() => handleSelectStatus("pending")}
          className={`rounded-lg transition duration-300 sm:px-10 px-2 py-2 hover:cursor-pointer hover:bg-gray-50 ${
            status === "pending" ? highligt : undefined
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => handleSelectStatus("confirmed")}
          className={`rounded-lg transition duration-300 sm:px-10 px-2 py-2 hover:cursor-pointer hover:bg-gray-50 ${
            status === "confirmed" ? highligt : undefined
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => handleSelectStatus("success")}
          className={`rounded-lg transition duration-300 sm:px-10 px-2 py-2 hover:cursor-pointer hover:bg-gray-50 ${
            status === "success" ? highligt : undefined
          }`}
        >
          Completed
        </button>
      </div>

      <div className="max-h-[1000px] grid gap-4 pt-5 mt-10 pr-5 overflow-y-scroll">
        {!booking ? (
          <Loading />
        ) : (
          <>
            {/* Empty State */}
            {isEmpty && (
              <div className="text-center py-12">
                <Receipt className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  No {status} Bookings
                </h3>
                <p className="text-gray-500">
                  Your {status} Bookings will appear here.
                </p>
              </div>
            )}
            {booking.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col sm:grid bg-white rounded-xl relative space-y-4 sm:space-y-0 sm:space-x-6 p-5 sm:grid-cols-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                {/* Image Section */}
                <div className="flex justify-center sm:justify-start sm:col-span-1">
                  <img
                    src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${
                      item.listingId.imgUrl[0]
                    }.jpg`}
                    alt={item.listingId.imgUrl[0]}
                    className="h-48 w-full sm:h-48 sm:w-48 object-cover rounded-xl"
                  />
                </div>

                {/* Content Section */}
                <div className="sm:col-span-4">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 mb-3">
                    <h1 className="font-bold text-lg sm:text-xl leading-tight pr-2">
                      {item.listingId.title}
                    </h1>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                        ID #{item._id.slice(-6)}
                      </span>
                    </div>
                  </div>

                  {/* Location & Category */}
                  <div className="text-sm text-gray-600 mb-4">
                    <p className="flex items-center gap-1">
                      <span className="text-gray-400">📍</span>
                      {item.listingId.location.city},{" "}
                      {item.listingId.location.province}
                    </p>
                    <p className="text-gray-800 font-medium mt-1">
                      {item.listingId.category}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <p className="text-xl font-bold text-green-600">
                      Rp.{item.totalPrice.toLocaleString("id-ID")}
                    </p>
                  </div>

                  {/* Booking Details */}
                  <div className="grid grid-cols-2 sm:flex sm:justify-between gap-3 sm:gap-4 ">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center sm:text-left">
                      <p className="text-xs text-blue-600 font-medium mb-1">
                        Check In
                      </p>
                      <p className="text-sm font-semibold text-blue-800">
                        {new Date(item.checkIn).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 text-center sm:text-left">
                      <p className="text-xs text-orange-600 font-medium mb-1">
                        Check Out
                      </p>
                      <p className="text-sm font-semibold text-orange-800">
                        {new Date(item.checkOut).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 text-center sm:text-left">
                      <p className="text-xs text-purple-600 font-medium mb-1">
                        Capacity
                      </p>
                      <p className="text-sm font-semibold text-purple-800">
                        {item.listingId.capacity} Guest
                        {item.listingId.capacity > 1 ? "s" : ""}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-3 text-center sm:text-left">
                      <p className="text-xs text-gray-600 font-medium mb-1">
                        Status
                      </p>
                      <p
                        className={`text-sm font-semibold capitalize ${
                          item.bookingStatus === "pending"
                            ? "text-yellow-600"
                            : item.bookingStatus === "confirmed"
                            ? "text-blue-600"
                            : item.bookingStatus === "success"
                            ? "text-green-600"
                            : "text-gray-600"
                        }`}
                      >
                        {item.bookingStatus}
                      </p>
                    </div>
                  </div>

                  {/* Pay Now Button */}
                  {status === "pending" && (
                    <div className="block text-end mt-5 ">
                      {item.paymentId ? (
                        <button onClick={()=>(window.location.href = item.paymentId.midtrans_redirect)}  className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                          <span>💳</span>
                          Pay Now
                        </button>
                      ) : (
                        <Link
                          to={`../request-to-book/${item._id}`}
                          className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                          <span>💳</span>
                          Request to Book
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
