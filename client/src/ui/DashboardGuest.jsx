import img from "../assets/damn.png";

export default function DashboardGuest() {
  return (
    <>
      <h1 className="font-bold text-2xl ">My Bookings</h1>
      <div className="flex shadow-xl mt-10 p-1 justify-evenly rounded-xl  bg-white ">
        <button className=" hover:cursor-pointer">Pending</button>
        <button className=" hover:cursor-pointer">In Progress</button>
        <button className=" hover:cursor-pointer">Completed</button>
      </div>
      <div className="grid bg-white rounded-xl space-x-6 p-5 mt-12 grid-cols-5">
        <img
          src={img}
          alt={img}
          className="h-48 w-48 object-fill col-span-1 rounded-xl"
        />
        <div className="col-span-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-lg">Rumah om surya</h1>
            <h1 className="text-gray-500">Booking ID <span className="font-bold text-black">293123</span></h1>
          </div>
          <div className="text-xs text-gray-500">
            <p>boyolali,jawa Tengah</p>
            <p className="text-black">Rent House</p>
            <p>Hosted by <span className="text-black">Surya</span></p>
          </div>
          <div className="mt-5">
            <p>Rp.2000.000</p>
            <div className="flex justify-between text-sm mt-5">
              <div>
                <p className="text-gray-500">Check In</p>
                <p>20 May 2025</p>
              </div>
              <div>
                <p className="text-gray-500">Check Out</p>
                <p>27 May 2025</p>
              </div><div>
                <p className="text-gray-500">Capacity</p>
                <p>6 Guest</p>
              </div><div>
                <p className="text-gray-500">Status</p>
                <p>Confirmed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
