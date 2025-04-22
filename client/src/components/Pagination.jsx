import { useState } from "react";
import Card from "./Card";

export default function Pagination({data}) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 8;
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const item = data.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-4 gap-5">

      <Card data={item}/>
      </div>
      <div className="w-full flex justify-between">
        <button
          className="text-2xl p-5 font-semibold  rounded-full"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {"<"}
        </button>
        <p className="p-5 font-semibold  rounded-full">{currentPage}</p>
        <button
          className="text-2xl p-5 font-semibold rounded-full"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
