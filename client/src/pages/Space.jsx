import Pagination from "../components/Pagination";
import data from "../jsonFile/hotelAndVilla";
import { useState } from "react";
import Filter from "../components/Filter";

export default function Spaces() {
  const [check, setCheck] = useState(undefined);

  return (
    <>
        <section className="grid grid-cols-5 -ml-36 mt-10">
          <Filter/>
          <Pagination data={data} />
        </section>
    </>
  );
}
