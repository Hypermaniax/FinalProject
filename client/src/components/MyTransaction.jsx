import UseGetGuestPayment from "../hooks/payment/UseGetGuestPayment";
import Loading from "./Loading";
import { motion } from "framer-motion";

export default function MyTransaction() {
  const { payment, handleSelectStatus } = UseGetGuestPayment();
  console.log(payment)
  return ( 
    <>
      <h1 className="font-bold text-2xl ">My Trasaction</h1>
      <div className="flex shadow-xl mt-10 p-1 justify-evenly rounded-xl  bg-white ">
        <button
          onClick={() => handleSelectStatus("pending")}
          className=" hover:cursor-pointer"
        >
          Pending
        </button>
        <button
          onClick={() => handleSelectStatus("confirmed")}
          className=" hover:cursor-pointer"
        >
          In Progress
        </button>
        <button
          onClick={() => handleSelectStatus("success")}
          className=" hover:cursor-pointer"
        >
          Completed
        </button>
      </div>
      <div className="max-h-[800px] grid gap-5 pt-5 mt-10 pr-5 overflow-y-scroll">
        {!payment ? (
          <Loading />
        ) : (
          payment.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-3/4 flex justify-between rounded-xl shadow-lg m-5  bg-white p-5"
            >
              <div>
                <p className="text-gray-500">
                  Booking Id <span className="font-bold text-black">{item._id}</span>
                </p>
                <h1 className="text-2xl font-semibold">{item.bookingId?.listingId.title}</h1>
                <p>paid at-15</p>
                <p className="text-gray-500">Payment Method : {item.paymentMethod}</p>
              </div>
              <div className=" content-center">
                <p>Rp.122222</p>
              </div>
            </motion.div>
          ))
          // <></>
        )}
      </div>
    </>
  );
}
