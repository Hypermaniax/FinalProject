import { useRef } from "react";
import Input from "./Input";

export default function Search({ gotValue }) {
  const province = useRef();
  const category = useRef();
  const checkIn = useRef();
  const duration = useRef();

  function onClick(){
    gotValue(true)
  }

  return (
    <div className="md:grid md:grid-cols-6 block grid-cols-1 md:gap-5 gap-1 bg-white w-3/4 mx-auto p-10 rounded-xl mb-10 relative z-30 -mt-32 shadow-lg">
      <Input
        grid="col-span-3"
        typeInput="text"
        label="Province, City or destination"
        id="province"
        ref={province}
      />
      <Input
        grid="col-span-3"
        typeInput="text"
        label="Category"
        id="province"
        ref={category}
      />
      <Input
        grid="col-span-2"
        typeInput="date"
        label="Check-in"
        id="province"
        ref={checkIn}
      />
      <Input
        grid="col-span-2"
        typeInput="date"
        label="Duration"
        id="province"
        ref={duration}
      />
      <Input
        grid="col-span-2"
        typeInput="text"
        text
        label="Check out"
        id="province"
      />
      <Input
        grid="col-span-4"
        typeInput="text"
        label="Guest And Rooms"
        id="province"
      />
      <button
        className="col-span-2 bg-pink  mt-5 rounded-lg text-white font-bold"
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
}
