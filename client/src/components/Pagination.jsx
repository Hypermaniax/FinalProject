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
    <section className="grid grid-cols-1 lg:grid-cols-5 mt-14 gap-6 px-4">
      {/* Sidebar Filter */}
      <aside className="lg:col-span-1 hidden sm:block ">
        <Filter />
        <Filter />
        <Filter />
      </aside>

      {/* Main Content */}
      <div className="lg:col-span-4 min-h-screen">
        {/* Search Bar */}
        <div className="bg-white w-full mb-5 text-lg shadow-xl rounded-xl flex flex-col md:flex-row justify-between gap-4 py-5 px-4">
          <div className="flex flex-col sm:flex-row w-full gap-4 sm:gap-10">
            <DropDown handleClick={setCity} />
            <Select className="w-full rounded-lg" ref={capacity} />
          </div>
          <button
            onClick={() => handleFilter(city, capacity.current?.value)}
            className="bg-pink px-4 py-2 rounded-lg font-medium text-white w-full sm:w-auto"
          >
            Search
          </button>
        </div>

        {/* Listing Grid */}
        {!!paginationData && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {itemFilter.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                className="bg-white relative transition-all duration-300 ease-in-out transform hover:-translate-y-2 rounded-3xl w-full cursor-pointer shadow-md overflow-hidden"
              >
                <Heart
                  onClick={() => handleClick(item._id)}
                  className="absolute top-4 right-4 text-white hover:text-pink"
                />
                <Link to={`/space/${item._id}`}>
                  <img
                    src={`${import.meta.env.VITE_API_URL_LISTING_IMG}${item.imgUrl[0]}.jpg`}
                    className="w-full h-60 object-cover"
                    alt={item.title}
                  />
                  <div className="text-start p-4">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      {item.location.city}, {item.location.province}
                    </p>
                    <p className="text-sm font-light">⭐{item.rating} ({item.reviews})</p>
                    <p className="font-semibold">
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
        )}

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center space-x-6">
            <ChevronLeft
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              size={32}
              className={`rounded-full p-1 ${
                currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-pink hover:text-white cursor-pointer"
              }`}
            />
            <p className="px-5 py-2 font-semibold bg-white rounded-full shadow-md">{currentPage}</p>
            <ChevronRight
              onClick={() => currentPage < totalPage && setCurrentPage(currentPage + 1)}
              size={32}
              className={`rounded-full p-1 ${
                currentPage === totalPage ? "text-gray-400 cursor-not-allowed" : "hover:bg-pink hover:text-white cursor-pointer"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
