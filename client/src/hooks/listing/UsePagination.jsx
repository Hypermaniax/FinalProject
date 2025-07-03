import { useEffect, useState } from "react";
import axios from "axios";
import { listingPagination } from "../../services/listing";
import { useCallback } from "react";

export default function UsePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginationData, setPaginationData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [filter, setFilter] = useState();

  useEffect(() => {
    const pagination = async () => {
      try {
        const pagination = await listingPagination(currentPage, filter);
        setPaginationData(pagination);
        setTotalPage(pagination);
      } catch (error) {}
    };
    pagination()
  }, [currentPage, filter]);

  const handleFilter = useCallback((province, capacity) => {
    setFilter(province);
  }, []);

  return {
    currentPage,
    paginationData,
    setCurrentPage,
    itemFilter: paginationData, // langsung pakai data
    totalPage,
    handleFilter,
  };
}
