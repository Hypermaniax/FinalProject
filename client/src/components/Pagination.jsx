import Filter from "./Filter";
import { ChevronLeft, ChevronRight, Heart, Hotel } from "lucide-react";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import Select from "react-select";
import UsePagination from "../hooks/listing/UsePagination";
import { useRef } from "react";
import { useState } from "react";
import UseAddWhistlist from "../hooks/whislist/UseAddWhistlist";
import { motion } from "framer-motion";

export default function Pagination() {
  const {
    paginationData,
    currentPage,
    totalPage,
    setCurrentPage,
    itemFilter,
    handleFilter,
  } = UsePagination();
  const [city, setCity] = useState();
  const { handleClick } = UseAddWhistlist();
  const capacity = useRef();
  return (
    <section className=" grid mt-14 grid-cols-5">
      <section className="col-span-1">
        <Filter />
        <Filter />
        <Filter />
      </section>
      <div className="col-span-4 min:h-screen">
        <div className="bg-white w-full mb-5 text-lg shadow-xl rounded-xl flex justify-between py-5 px-4 ">
          <div className="flex  w-2/3 gap-10">
            <DropDown handleClick={setCity} />
            <Select className="h-full w-full rounded-lg" ref={capacity} />
          </div>
          <button
            onClick={() => handleFilter(city, capacity.current.value)}
            className="bg-pink px-3 py-2 rounded-lg font-medium text-white"
          >
            Search
          </button>
        </div>
        {!!paginationData && (
          <>
            <div className="grid grid-cols-4 gap-5">
              {itemFilter.map((item, index) => (
                <motion.div
                  key={item._id} // hindari pakai index, lebih stabil pakai ID
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.07 }}
                  className="bg-white relative transition-all duration-300 ease-in-out transform hover:-translate-y-2 rounded-3xl w-full cursor-pointer shadow-[0_8px_10px_-4px_rgba(0,0,0,0.2)] overflow-hidden"
                >
                  <Heart
                    onClick={() => handleClick(item._id)}
                    className="absolute top-4 right-4 text-white hover:text-pink"
                  />
                  <Link to={`/space/${item._id}`}>
                    {/* <p>{item._id}</p> */}
                    {/* http://localhost:3000//uploads/${item.imgUrl[0]} */}
                    <img
                      src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${
                        item.imgUrl[0]
                      }`}
                      className="w-full h-60 object-cover"
                      alt="Monas"
                    />
                    <div className="text-start p-4">
                      <p className="text-start font-semibold">{item.title}</p>
                      <p className="text-start font-light text-gray-500">
                        {item.location.city},{item.location.province}
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
                </motion.div>
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
