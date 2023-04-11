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
    const { primaryReleaseYear } = filterFields;
    const ternaryCondition = primaryReleaseYear && !Number.isNaN(primaryReleaseYear);
    const filteredPrimaryReleaseYear = ternaryCondition
      ? Number(primaryReleaseYear)
      : defaultYear;

    setFilter((prevState) => ({
      ...prevState,
      ...filterFields,
      primaryReleaseYear: filteredPrimaryReleaseYear,
    }));
  }, []);

  return {
    filter,
    setPage,
    setFiltering,
  };
};
