import Pagination from "../../ui/Pagination";
import WrapperContent from "../../ui/WrapperContent";
import Hero from "../../ui/Hero";
import heroImg from "../../assets/heroimg.png";
import UsePagination from "../../hooks/UsePagination";
import useToggle from "../../hooks/UseToggle";
import { useState } from "react";
import BookingDetails from "./BookingDetails";
import UseListingDetails from "../../hooks/UseListingsDetail";

export default function Spaces() {
  const { paginationData, currentPage, totalPage, setCurrentPage, itemFilter } =
    UsePagination();
  const { setSelected } = UseListingDetails();
  const { state, toggle } = useToggle();

  return (
    <>
      <Hero>
        <WrapperContent>
          <div className="flex items-center justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="font-bold text-4xl text-white leading-snug">
                Find and book spaces in
                <br />
                easy way with <span className="text-white">StayNesia</span>
              </h1>
              <p className="mt-4 text-center text-white text-xl font-bold">
                Stay anywhere, anytime, your way
              </p>
            </div>
            <div className="flex-shrink-0">
              <img
                src={heroImg} // Ganti path sesuai lokasi file kamu
                alt="StayNesia preview"
                className="w-[300px] drop-shadow-lg"
              />
            </div>
          </div>
        </WrapperContent>
      </Hero>
      <WrapperContent>
        <Pagination
          paginationData={paginationData}
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
          itemFilter={itemFilter}
          toggle={toggle}
          setSelected={setSelected}
        />
      </WrapperContent>
    </>
  );
}
