import React, {
  useCallback, useEffect, useState,
} from 'react';
import { MoviesFilterInput } from '../components/typedefs/typedefs';

interface Options {
  refetch: () => void,
  filter: MoviesFilterInput,
  onClick: (value: boolean) => void,
  setPage: (page: number) => void,
  searchMovies: (vars: any) => void,
}

export const useSearchMovie = (options: Options) => {
  const {
    filter,
    setPage,
    refetch,
    onClick,
    searchMovies,
  } = options;

  const [searchKey, setSearchKey] = useState('');

  const handleClickReset = useCallback(() => {
    onClick(true);

    setSearchKey('');
    setPage(1);
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refetch]);

  const handleClickSubmit = useCallback(() => {
    onClick(false);
  }, [onClick]);

  const { page } = filter;

  const searchMovie = useCallback(() => {
    if (searchKey) {
      searchMovies({
        variables: { filter, query: searchKey, page },
      });
    }
  }, [filter, page, searchKey, searchMovies]);

  const onSubmitForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchMovie();
  }, [searchMovie]);

  const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  }, []);

  useEffect(() => {
    if (searchKey) {
      searchMovie();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return {
    searchKey,
    onSubmitForm,
    onSearchChange,
    handleClickReset,
    handleClickSubmit,
  };
};
