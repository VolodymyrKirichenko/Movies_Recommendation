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
    setFilter({
      ...filter,
      page,
    });
  }, [filter]);

  const setFiltering = useCallback((filterFields: any) => {
    setFilter({
      ...filter,
      ...filterFields,
      year: Number(filterFields.year),
      primaryReleaseYear: Number(filterFields.primaryReleaseYear),
    });
  }, [filter]);

  return {
    filter,
    setPage,
    setFiltering,
  };
};
