import { useState } from 'react';
import { Movie } from '../components/typedefs/typedefs';

export function useMovieLocaleStorage(key: string, initialValue: Movie[] = []) {
  const [state, setState] = useState<Movie[]>(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setValue = (value: Movie[]) => {
    setState(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const addToLocalStorageArray = (newItem: Movie) => {
    const storedValue = localStorage.getItem(key);
    const arr: Movie[] = storedValue ? JSON.parse(storedValue) : [];

    arr.push(newItem);
    localStorage.setItem(key, JSON.stringify(arr));
    setState(arr);
  };

  const removeFromLocalStorageArray = (id: string) => {
    const storedValue = localStorage.getItem(key);
    const arr: Movie[] = storedValue ? JSON.parse(storedValue) : [];

    const newArray = arr.filter((movie) => movie.id !== id);

    localStorage.setItem(key, JSON.stringify(newArray));
    setState(newArray);
  };

  return [
    state,
    setValue,
    addToLocalStorageArray,
    removeFromLocalStorageArray,
  ] as const;
}
