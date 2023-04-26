import { useCallback, useState } from 'react';
import { Movie } from '../components/typedefs/typedefs';
import { useTimer } from './useTimer';

const MAX_SELECTED_MOVIES = 20;

export const useMovie = () => {
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
  const [openAlert, setOpenAlert] = useState(false);
  const delay = 1000;

  useTimer({ openAlert, setOpenAlert, delay });

  const handleChangeAlert = useCallback(() => {
    setOpenAlert((prevState) => !prevState);
  }, [setOpenAlert]);

  const selectMovie = useCallback((movie: Movie) => {
    const { length } = selectedMovies;
    const isNewMovie = !selectedMovies.find(({ id }) => id === movie.id);

    if (isNewMovie && length < MAX_SELECTED_MOVIES) {
      setSelectedMovies((currentMovies) => ([
        ...currentMovies,
        movie,
      ]));
    }
  }, [selectedMovies]);

  const deleteMovie = useCallback((movie: Movie) => {
    setSelectedMovies((prevSelectedMovies) => (
      prevSelectedMovies.filter(({ id }) => id !== movie.id)
    ));
  }, [setSelectedMovies]);

  return {
    openAlert,
    selectMovie,
    deleteMovie,
    handleChangeAlert,
    setOpenAlert,
    selectedMovies,
  };
};
