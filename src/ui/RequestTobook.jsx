import { ArrowLeft, Star } from "lucide-react";
import damn from "../assets/damn.png";
import PaymentMethod from "./PaymentMethod";
import UseBookings from "../hooks/UseBookings";
import { useContext } from "react";
import { AuthContext } from "../routes/AuthContext";
import { useState } from "react";
import WrapperContent from "./WrapperContent";

export default function RequestToBook({ date, data }) {
  const { setBookings } = UseBookings();
  const [selectedMethod, setSelectedMethod] = useState();

  // function calculate() {
  //   const raw = parseInt(data.formatted.replace(/\./g, "")); // Remove dots and convert to number
  //   const ppn = raw * 0.12;
  //   const total = raw * data.days + ppn + 105000;
  //   const tax = ppn + 105000;
  //   return {
  //     ppn: ppn.toLocaleString("id-ID"),
  //     total: total.toLocaleString("id-ID"),
  //     tax: tax.toLocaleString("id-ID"),
  //   }; // Format back with dots
  // }
  const { user } = useContext(AuthContext);
  console.log(user);
  

  // const { ppn, total, tax } = calculate();
  
  // const confirm = () => {
  //   if (!selectedMethod) return;
  //   setBookings({
  //     checkIn: data.checkIn,
  //     checkOut: data.checkOut,
  //     totalPrice: total,
  //     listingId: data.id,
  //     guestId: user._id,
  //     payment: selectedMethod,
  //   });
  // };

  return (
    <WrapperContent>
      <header className="flex gap-5 mt-10 items-center">
        <ArrowLeft
          // onClick={back}
          className="hover:bg-pink hover:text-white transition-colors ease-in-out duration-300 rounded-full"
          size={30}
        />
        <span className="text-xl font-bold">Request to Book</span>
      </header>
      <section className="grid grid-cols-3 gap-4 w-11/12 mx-auto">
        <div className="col-span-2  space-y-5 my-5">
          <div className="bg-white  text-gray-500 text-sm space-y-3 shadow-lg rounded-xl p-5">
            <span className="font-semibold text-black text-lg">
              Trip Details
            </span>
            <p>
              {/* {data.checkIn.toDateString()} - {data.checkOut.toDateString()} */} Date
            </p>
            <p>1 Guest</p>
          </div>
          <PaymentMethod setSelectedMethod={setSelectedMethod} />
        </div>
        <div className=" space-y-5 my-5 ">
          <div className="bg-white rounded-xl text-gray-600 space-y-3 shadow-2xl p-5">
            <header>
              <span className="font-semibold text-black text-lg">
                Payment Details
              </span>
              <p className="text-xs">
                Please check your payment details before proceeding.
              </p>
            </header>
            <section className="flex space-x-4">
              <img
                src={damn}
                alt={damn}
                className="w-32 h-24 object-fill rounded-lg"
              />
              <div className="text-sm">
                <span className="text-black text-base font-medium">
                  title
                </span>
                <span className="flex ">
                  <Star className="text-pink" />
                  4.75 (2001)
                </span>
                <span>Pending</span>
              </div>
            </section>
            <section className="text-sm py-5 border-b-2 border-t-2">
              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">
                  Price of the venue
                </span>
                <span className="font-medium">Rp
                  {/* {data.formatted} */}
                  </span>
              </div>
              <p className="text-gray-500 mb-4">
                {/* ({data.days}×) {data.category} ({data.days} malam) */}ddd
              </p>

              <div className="flex justify-between mb-1">
                <span className="text-gray-800 font-medium">Tax and Fee</span>
                <span className="font-medium">Rp
                  {/* {tax} */} tax
                  </span>
              </div>
              <div className=" text-gray-500 text-sm">
                <div className="flex justify-between">
                  <span>PPN 12%</span>
                  <span>Rp.
                    {/* {ppn} */}PPN
                    </span>
                </div>
                <div className="flex justify-between">
                  <span>StayNesia Fee</span>
                  <span>Rp.105.000</span>
                </div>
              </div>
            </section>
            <section className="flex justify-between">
              <span>Total Price</span>
              <span className="font-bold">Rp
                {/* {total} */}
                </span>
            </section>
          </div>
          <div className="grid gap-2 grid-cols-2">
            <button className="bg-white border-pink border rounded-lg py-1">
              Cancel booking
            </button>
            <button
              // onClick={confirm}
              className="bg-red-400 text-white hover:bg-pink transition-colors ease-in-out duration-300 rounded-lg py-1"
            >
              Request to book
            </button>
          </div>
        </div>
      </section>
    </WrapperContent>
  );
}
