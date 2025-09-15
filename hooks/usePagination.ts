import { useCallback, useState } from "react";

export function usePagination(limit = 10) {
  const [start, setStart] = useState(1);
  const [page, setPage] = useState(1);

  const handlePageChange = useCallback((page: number) => {
    setStart((page - 1) * limit + 1);
    setPage(page);
  }, []);

  return { start, limit, handlePageChange, page };
}
