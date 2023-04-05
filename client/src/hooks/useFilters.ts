import { useState, useCallback } from 'react';
import { SORT_DIRECTION } from '../components/Filters/variables';

export const useFilters = () => {
  const [filter, setFilter] = useState({
    page: 1,
    sortBy: 'popularity',
    sortDirection: SORT_DIRECTION.DESC,
    includeAdult: true,
  });

  const setPage = useCallback((page: number) => {
    setFilter((prevState) => ({
      ...prevState,
      page,
    }));
  }, []);

  const setFiltering = useCallback((filterFields: any) => {
    setFilter((prevState) => ({
      ...prevState,
      ...filterFields,
      year: Number(filterFields.year),
      primaryReleaseYear: Number(filterFields.primaryReleaseYear),
    }));
  }, []);

  return {
    filter,
    setPage,
    setFiltering,
  };
};
