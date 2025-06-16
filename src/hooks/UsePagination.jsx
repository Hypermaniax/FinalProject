import { useEffect, useState } from "react";
import axios from "axios";

export default function UsePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/public/listing/pagination/?page=${currentPage}&limit=16`
        );
        setPaginationData(res.data.data);
        setTotalPage(res.data.totalPage);
      } catch (error) {}
    })();
  }, [currentPage]);

  return {
    currentPage,
    paginationData,
    setCurrentPage,
    itemFilter: paginationData, // langsung pakai data
    totalPage,
  };
}
