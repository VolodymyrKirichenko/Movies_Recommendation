import { useCallback, useEffect, useState } from 'react';
import { Movie } from '../components/typedefs/typedefs';

const MAX_SELECTED_MOVIES = 20;

export const useMovie = () => {
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
  const [openAlert, setOpenAlert] = useState(false);

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
    setSelectedMovies(selectedMovies.filter(({ id }) => id !== movie.id));
  }, [selectedMovies]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (openAlert) {
      timer = setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [openAlert, setOpenAlert]);

  return {
    openAlert,
    selectMovie,
    deleteMovie,
    handleChangeAlert,
    setOpenAlert,
    selectedMovies,
  };
};
