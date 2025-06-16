import Input from "./Input";
import Filter from "./Filter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SelectMenu from "./SelectMenu";
import { Link } from 'react-router-dom';

export default function Pagination({
  paginationData,
  currentPage,
  totalPage,
  setCurrentPage,
  itemFilter,
  toggle,
  setSelected,
}) {
  return (
    <section className=" grid mt-14 grid-cols-5">
      <section className="col-span-1">
        <Filter />
        <Filter />
        <Filter />
      </section>
      <div className="col-span-4 min:h-screen">
        <div className="bg-white w-full mb-5 text-lg shadow-xl  rounded-xl grid grid-cols-4 p-4 items-end gap-5">
          <SelectMenu icon />
          <Input typeInput={"date"} label="Date" />
          <SelectMenu />
          <button className="bg-pink px-3 rounded-lg font-medium text-white">
            Search
          </button>
        </div>
        {!!paginationData && (
          <>
            <div className="grid grid-cols-4 gap-5">
              {itemFilter.map((item, index) => (
                <Link
                  className="bg-white transition-all duration-300 ease-in-out transform hover:translate-y-[-10px] rounded-3xl w-full cursor-pointer shadow-[0_8px_10px_-4px_rgba(0,0,0,0.2)] overflow-hidden "
                  to={`/space/${item._id}`}
                  key={index}
                >
                  {/* http://localhost:3000//uploads/${item.imgUrl[0]} */}
                  <img
                    // src={`http://localhost:3000//uploads/${item.imgUrl[0]}`}
                    className="w-full h-60 object-cover"
                    alt="Monas"
                  />
                  <div className="text-start p-4">
                    <p className="text-start font-semibold">{item.title}</p>
                    <p className="text-start font-thin">
                      {item.location.province}
                    </p>
                    <p className="text-start font-thin">
                      ⭐{item.rating}({item.reviews})
                    </p>
                    <p className="text-start font-semibold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(item.price)}{" "}
                      / night
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
        <div className="  mt-10 flex ">
          <div className="mx-auto flex items-center space-x-16">
            <ChevronLeft
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              size={30}
              className="hover:bg-pink hover:text-white rounded-full"
            />
            <p className="p-5 font-semibold  rounded-full">{currentPage}</p>
            <ChevronRight
              size={30}
              className="hover:bg-pink hover:text-white rounded-full"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
