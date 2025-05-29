import image from "../assets/Rectangle8.png";
import Loading from "./Loading";
export default function ListingCard({ dummy, data }) {
  if (!data) return <Loading />
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="col-span-2 gap-5  grid grid-cols-2 rounded-lg p-5 bg-silver"
        >
          <section className="col-span-1 flex flex-col justify-between h-full">
            {/* Top content */}
            <div>
              <h1 className="font-bold">{item.title}</h1>
              <p>Place: {item.location.province}</p>
              <p>Category: {item.category}</p>

              <div className="grid grid-cols-[auto_1fr] gap-x-2">
                <span>Facilities:</span>
                <span>
                  {item.facility.map((facility, i) => (
                    <span key={i}>
                      {facility}
                      {i < item.facility.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </span>
              </div>

              <p>Capacity: {item.capacity}</p>
            </div>

            {/* Bottom buttons */}
            <div className="flex   gap-2 pt-4">
              <button className="w-1/2 bg-black text-white px-4 py-2 rounded">
                Edit
              </button>
              <button className=" w-1/2 bg-redCustom text-white px-4 py-2 rounded">
                Delete
              </button>
            </div>
          </section>
          <div className="relative h-64 w-full">
            <img
              src={Array.isArray(item.imgUrl) ? item.imgUrl[0] : item.imgUrl}
              alt={item.title || "Property image"}
              className="absolute inset-0 w-full h-full object-cover rounded"
            />
          </div>
        </div>
      ))}
    </>
  );
}
