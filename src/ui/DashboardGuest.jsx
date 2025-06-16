import img from "../assets/spongebob.jpeg";

export default function DashboardGuest({ listingCard }) {
  console.log(listingCard);

  return (
    <>
      <h1 className="font-bold text-2xl ">My Bookings</h1>
      <div className="flex shadow-xl mt-10 p-1 justify-evenly rounded-xl  bg-white ">
        <button className=" hover:cursor-pointer">Pending</button>
        <button className=" hover:cursor-pointer">In Progress</button>
        <button className=" hover:cursor-pointer">Completed</button>
      </div>
      <div className="max-h-[800px] grid gap-5 pt-5 mt-10 pr-5 overflow-y-scroll">
        {listingCard.map((item, index) => (
          <div
            key={index}
            className="grid bg-white rounded-xl space-x-6 p-5 grid-cols-5"
          >
            <img
              src={img}
              alt={img}
              className="h-48 w-48 object-fill col-span-1 rounded-xl"
            />
            <div className="col-span-4">
              <div className="flex justify-between">
                <h1 className="font-bold text-lg">{item.listingId.title}</h1>
                <h1 className="text-gray-500">
                  Booking ID{" "}
                  <span className="font-bold text-black">{item._id}</span>
                </h1>
              </div>
              <div className="text-xs text-gray-500">
                <p>{item.listingId.location.city},{item.listingId.location.province}</p>
                <p className="text-black">{item.listingId.category}</p>
                
              </div>
              <div className="mt-5">
                <p>Rp.{item.totalPrice.toLocaleString("id-ID")}</p>
                <div className="flex justify-between text-sm mt-5">
                  <div>
                    <p className="text-gray-500">Check In</p>
                    <p>{new Date(item.checkIn).toDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Check Out</p>
                    <p>{new Date(item.checkOut).toDateString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Capacity</p>
                    <p>{item.listingId.capacity} Guest</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Status</p>
                    <p>Confirmed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
