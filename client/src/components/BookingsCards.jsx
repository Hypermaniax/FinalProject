import Input from "./Input";

export default function BookingsCards() {
  return (
    <div
      className="grid grid-cols-6 gap-5 bg-white w-3/4 mx-auto p-10 rounded-xl relative z-30 -mt-32 shadow-lg"
      action=""
      method="post"
    >
      <Input
        grid="col-span-3"
        typeInput="text"
        label="Province, City or destination"
        id="province"
      />
      <Input
        grid="col-span-3"
        typeInput="text"
        label="Province, City or destination"
        id="province"
      />
      <Input
        grid="col-span-2"
        typeInput="date"
        label="Check-in"
        id="province"
      />
      <Input
        grid="col-span-2"
        typeInput="date"
        label="Duration"
        id="province"
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
      <button className="col-span-2 bg-pink  mt-5 rounded-lg text-white font-bold">
        Search
      </button>
    </div>
  );
}
