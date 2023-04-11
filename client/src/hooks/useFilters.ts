import { useState, useCallback } from 'react';
import { SORT_DIRECTION } from '../components/Filters/variables';
import { MoviesFilterInput } from '../components/typedefs/typedefs';

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

  const setFiltering = useCallback((filterFields: MoviesFilterInput) => {
    const defaultYear = new Date().getFullYear();

    setFilter((prevState) => ({
      ...prevState,
      ...filterFields,
      primaryReleaseYear: filterFields.primaryReleaseYear
      && !Number.isNaN(filterFields.primaryReleaseYear)
        ? Number(filterFields.primaryReleaseYear)
        : defaultYear,
    }));
  }, []);

  return {
    filter,
    setPage,
    setFiltering,
  };
};
