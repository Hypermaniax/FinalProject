import { useEffect, useMemo, useState } from "react";
import Loading from "./Loading";

export default function Pagination({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dummy, setDummy] = useState(undefined);

  useEffect(() => {
    setDummy(data);
  }, []);

  if (!dummy) return;

  const itemPerPage = 16;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const itemFilter = dummy.slice(startIndex, endIndex);

  const totalPage = Math.ceil(dummy.length / itemPerPage);

  return (
    <section className="col-span-4">
      <div className="bg-white w-full mb-5 p-2 text-lg shadow-xl  rounded-xl flex justify-center gap-2">
        <input
          placeholder="Place..."
          type="text"
          className="outline-none p-1 text-base border rounded-lg bg-"
        />
        <input
          placeholder="Date..."
          type="date"
          className="outline-none p-1 text-base border rounded-lg"
        />
        <input
          placeholder="Max Guest..."
          type="text"
          className="outline-none p-1 text-base border rounded-lg"
        />
        <button className="bg-pink px-3 rounded-lg font-medium text-white">
          Search
        </button>
      </div>
      {!!dummy && (
        <>
          <div className="grid grid-cols-4 gap-5">
            {itemFilter.map((item, index) => (
              <div
                className="bg-white transition-all duration-300 ease-in-out transform hover:translate-y-[-10px] rounded-3xl w-full cursor-pointer shadow-[0_8px_10px_-4px_rgba(0,0,0,0.2)] overflow-hidden "
                key={index}
              >
                <img
                  src={item.image_url}
                  className="w-full h-60 object-cover"
                  alt="Monas"
                />
                <div className="text-start p-4">
                  <p className="text-start font-semibold">{item.name}</p>
                  <p className="text-start font-thin">{item.place}</p>
                  <p className="text-start font-thin">
                    ⭐{item.rating}({item.reviews})
                  </p>
                  <p className="text-start font-semibold">
                    Rp.{item.price_per_night} / night
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-between">
            <button
              className="text-2xl p-5 font-semibold  rounded-full"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            <p className="p-5 font-semibold  rounded-full">{currentPage}</p>
            <button
              className="text-2xl p-5 font-semibold rounded-full"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPage}
            >
              {">"}
            </button>
          </div>
        </>
      )}
    </section>
  );
}
