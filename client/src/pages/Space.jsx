import BookingsCards from "../components/Search";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Pagination from "../components/Pagination";
import data from "../jsonFile/hotelAndVilla";
import { useState } from "react";
import Filter from "../components/Filter";

export default function Spaces() {
  const [check, setCheck] = useState(undefined);
  console.log(check);

  return (
    <>
      {!!check ? (
        <section className="grid grid-cols-5 -ml-36 mt-10">
          <Filter/>
          <Pagination data={data} />
        </section>
      ) : (
        <>
          <Hero />
          <BookingsCards gotValue={setCheck} />
          <Carousel title={"Top Rating Spaces"} />
          <Carousel title={"Most Affordable"} />
          <Carousel title={"Top Sales"} />{" "}
        </>
      )}
    </>
  );
}
