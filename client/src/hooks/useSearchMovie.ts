import React, { useCallback, useEffect, useState } from 'react';
import { MoviesFilterInput } from '../components/typedefs/typedefs';

interface Options {
  filter: MoviesFilterInput,
  searchMovies: (vars: any) => void,
}

export const useSearchMovie = (options: Options) => {
  const { searchMovies, filter } = options;

  const [searchKey, setSearchKey] = useState('');

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
  };
};
