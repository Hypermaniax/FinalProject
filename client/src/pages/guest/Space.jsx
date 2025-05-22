import Pagination from "../../ui/Pagination";
import data from "../../jsonFile/hotelAndVilla";
import { useState } from "react";
import Filter from "../../ui/Filter";
import WrapperContent from "../../ui/WrapperContent";
import Hero from "../../ui/Hero";
import heroImg from "../../assets/heroimg.png";
export default function Spaces() {
  const [check, setCheck] = useState(undefined);

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
        <Pagination data={data} />
      </WrapperContent>
    </>
  );
}
