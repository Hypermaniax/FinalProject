import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays } from "lucide-react";

const Input = forwardRef(function Input(
  { typeInput, label, id, grid, text, spaceBar, placeHolder },
  ref
) {
  const data = useRef();
  const [startDate, setStartDate] = useState(new Date());

  useImperativeHandle(ref, () => {
    return {
      value() {
        return data.current.value;
      },
    };
  });

  const handleKeyDown = (e) => {
    if (spaceBar && e.key === " ") {
      e.preventDefault();
    }
  };
  const bookedDates = [new Date("2025-05-11")];

  return (
    <div className={grid}>
      <label
        htmlFor={id}
        className="text-sm  text-gray-600 text-left  block font-sans font-thin"
      >
        {label}
      </label>
      {text ? (
        <p>Monday, 17 oktober 2045</p>
      ) : typeInput === "date" ? (
        <div className="w-full  max-w-sm">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={new Date()}
          excludeDates={bookedDates}
          showIcon
          icon={
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
              <CalendarDays className="w-4 h-4 text-pink-500" />
            </div>
          }
          className="border rounded-xl px-4 py-2 pl-12 w-full text-sm text-black font-normal text-center outline-none shadow-sm"
          dayClassName={(date) =>
            bookedDates.some((d) => d.toDateString() === date.toDateString())
              ? 'text-red-500 line-through cursor-not-allowed pointer-events-none'
              : ''
          }
        />
      </div>
      
      ) : (
        <input
          placeholder={placeHolder}
          onKeyDown={handleKeyDown}
          type={typeInput}
          id={id}
          name={id}
          ref={data}
          className={`border-b-2 border-pink  outline-none  w-full font-normal  pt-2 text-sm`}
        />
      )}
    </div>
  );
});

export default Input;
