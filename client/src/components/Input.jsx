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
        <DatePicker
          showIcon
          icon={<CalendarDays />}
          className="border-b-2  border-pink outline-none w-full font-normal text-center text-sm"
          selected={startDate}
          minDate={new Date()}
          onChange={(date) => setStartDate(date)}
        />
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
