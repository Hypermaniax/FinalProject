import { ArrowLeft, Star } from "lucide-react";
import WrapperContent from "./WrapperContent";
import UsePaymentCreate from "../hooks/payment/UsePaymentCreate";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import UseGetGuestBookings from "../hooks/booking/UseGetGuestBooking";
import useToggle from "../hooks/UseToggle";
import ChangeReservation from "./ChangeReservation";
import { useContext, useState } from "react";
import { AuthContext } from "../store/AuthContext";

export default function RequestToBook() {
  const { id } = useParams();
  const { handleRemoveListing } = UseGetGuestBookings();
  const { toggle, state } = useToggle();
  const { user } = useContext(AuthContext);

  const {
    dataPayment,
    handleCreate,
    booked,
    formatCurrency,
    formatDate,
    isProcessing,
    taxAndFee,
    updateBookings,
  } = UsePaymentCreate(id);

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Enhanced cancel handler with confirmation
  const handleCancelBooking = () => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      handleRemoveListing(dataPayment._id);
    }
  };

  // Loading state
  if (!dataPayment) {
    return <Loading />;
  }

  return (
    <WrapperContent>
      {state && (
        <ChangeReservation
          bookedDate={booked}
          handleSave={() =>
            updateBookings(
              dataPayment._id,
              {
                checkIn: range[0].startDate,
                checkOut: range[0].endDate,
              },
              toggle()
            )
          }
          back={toggle}
          range={range}
          setRange={setRange}
        />
      )}
      <div className="sm:mx-0 mx-5 sm:mt-0 mt-4">
        <header className="flex gap-5 mt-10 items-center">
          <Link
            to="../bookings"
            className="hover:opacity-70 transition-opacity"
          >
            <ArrowLeft
              className="hover:bg-pink hover:text-white transition-colors ease-in-out duration-300 rounded-full p-1"
              size={32}
            />
          </Link>
          <h1 className="text-xl font-bold">Request to Book</h1>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mt-6">
          {/* Trip Details Section */}
          <section className="lg:col-span-2 space-y-5">
            <div className="bg-white text-gray-500 text-sm space-y-4 shadow-lg rounded-xl p-6">
              {/* Trip Details */}
              <div className="space-y-3 border-b-2 pb-4">
                <div className="flex justify-between items-start">
                  <h2 className="font-semibold text-black text-lg">
                    Trip Details
                  </h2>
                  <button
                    onClick={toggle}
                    className="underline hover:text-black font-semibold transition-colors ease-in-out duration-300 text-sm"
                  >
                    Change
                  </button>
                </div>

                <div className="space-y-2">
                  <p className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span className="font-medium text-black">Check-in:</span>
                    {formatDate(dataPayment.checkIn)}
                  </p>
                  <p className="flex flex-col sm:flex-row sm:items-center gap-1">
                    <span className="font-medium text-black">Check-out:</span>
                    {formatDate(dataPayment.checkOut)}
                  </p>
                  <p className="flex items-center gap-1">
                    <span className="font-medium text-black">Guests:</span>
                    {dataPayment.numGuest}{" "}
                    {dataPayment.numGuest === 1 ? "Guest" : "Guests"}
                  </p>
                  {dataPayment.duration && (
                    <p className="flex items-center gap-1">
                      <span className="font-medium text-black">Duration:</span>
                      {dataPayment.duration}{" "}
                      {dataPayment.duration === 1 ? "night" : "nights"}
                    </p>
                  )}
                </div>
              </div>

              {/* User Details */}
              <div className="space-y-3">
                <h2 className="text-lg text-black font-semibold">
                  Guest Information
                </h2>
                <div className="space-y-2">
                  <p className="flex flex-col sm:flex-row gap-1">
                    <span className="font-medium text-black">Name:</span>
                    <span className="capitalize">
                      {user?.name || "Not provided"}
                    </span>
                  </p>
                  <p className="flex flex-col sm:flex-row gap-1">
                    <span className="font-medium text-black">Email:</span>
                    <span>{user?.email || "Not provided"}</span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Details Section */}
          <aside className="space-y-5">
            <div className="bg-white rounded-xl text-gray-600 space-y-4 shadow-2xl p-6">
              <header className="space-y-1">
                <h2 className="font-semibold text-black text-lg">
                  Payment Summary
                </h2>
                <p className="text-xs text-gray-500">
                  Please review your payment details before proceeding.
                </p>
              </header>

              {/* Listing Preview */}
              <section className="flex space-x-4 p-3 bg-gray-50 rounded-lg">
                <img
                  src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${
                    dataPayment.listingId?.imgUrl?.[0]
                  }`}
                  alt={dataPayment.listingId?.title || "Listing"}
                  className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
                <div className="text-sm space-y-1 flex-1">
                  <h3 className="text-black text-base font-medium line-clamp-2">
                    {dataPayment.listingId?.title || "Listing Title"}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="text-pink w-4 h-4" fill="currentColor" />
                    <span className="text-sm">4.75 (2001)</span>
                  </div>
                  <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    {dataPayment.bookingStatus || "Pending"}
                  </span>
                </div>
              </section>

              {/* Price Breakdown */}
              <section className="text-sm py-4 border-t-2 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">Venue Price</span>
                  <span className="font-medium">
                    {formatCurrency(dataPayment.calculatePrice)}
                  </span>
                </div>
                {dataPayment.duration && (
                  <p className="text-gray-500 text-xs">
                    ({dataPayment.duration} × nights)
                  </p>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">
                    Taxes & Fees
                  </span>
                  <span className="font-medium">
                    {formatCurrency(taxAndFee)}
                  </span>
                </div>

                <div className="text-gray-500 text-xs space-y-1 ml-4">
                  <div className="flex justify-between">
                    <span>PPN (12%)</span>
                    <span>{formatCurrency(dataPayment.taxAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>StayNesia Fee</span>
                    <span>{formatCurrency(dataPayment.feeAmount)}</span>
                  </div>
                </div>
              </section>

              {/* Total */}
              <section className="flex justify-between items-center pt-4 border-t-2">
                <span className="font-semibold text-black">Total</span>
                <span className="font-bold text-lg text-black">
                  {formatCurrency(dataPayment.totalPrice)}
                </span>
              </section>
            </div>

            {/* Action Buttons */}
            <div className="grid gap-3 grid-cols-2">
              <Link
                to={`../bookings`}
                onClick={handleCancelBooking}
                className="bg-white text-center border-pink border-2 rounded-lg py-3 px-4 hover:bg-pink-50 transition-colors ease-in-out duration-300 font-medium"
              >
                Cancel
              </Link>
              <button
                onClick={() => handleCreate()}
                disabled={isProcessing}
                className="bg-red-400 text-white hover:bg-pink transition-colors ease-in-out duration-300 rounded-lg py-3 px-4 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Request to Book"}
              </button>
            </div>
          </aside>
        </main>
      </div>
    </WrapperContent>
  );
}
