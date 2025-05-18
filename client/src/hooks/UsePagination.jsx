import { useEffect, useState } from "react";
import axios from "axios";

export default function UsePagination() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState();

  useEffect(() => {
    (async () => {
      try {
        const res = axios.post("", { page, limit });
        setPage(res);
        setLimit(limit);
      } catch (error) {}
    })();
  }, [page]);

  return {
    setPage,
    page,
    limit,
    setLimit,
  };
}
