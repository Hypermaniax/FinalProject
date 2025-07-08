import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import useToggle from "../hooks/UseToggle";
export default function ChangeReservation({ back }) {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const { open, close, state } = useToggle();
  console.log(state);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center"
    >
      <div className="relative bg-white rounded-2xl shadow-xl space-y-5 p-8 w-full max-w-3xl">
        {/* Close Button */}
        <button
          onClick={back}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 hover:text-pink hover:bg-pink-500 transition"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold  text-gray-800">
          Change Reservation Dates
        </h2>
        <div className="bg-gray-300 flex gap-2 p-1.5 rounded-full">
          <button
            onClick={close}
            className={`w-full rounded-full p-1.5 ${!state && `bg-white`}`}
          >
            Dates
          </button>
          <button
            onClick={open}
            className={`w-full rounded-full p-1.5 ${state && `bg-white`}`}
          >
            Guests
          </button>
        </div>
        {/* Date Picker */}

        {state ? (
          <div className="p-5">
            <input type="number" />
          </div>
        ) : (
          <DateRange
            showMonthAndYearPickers={false}
            // showSelectionPreview={false}
            editableDateInputs={true}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={2}
            direction="horizontal"
            className="w-full"
            minDate={new Date()}
          />
        )}
        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          <button
            // onClick={handleSave} // replace with your save handler
            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Save
          </button>
        </div>
      </div>
    </motion.div>
  );
}
