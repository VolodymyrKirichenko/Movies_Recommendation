import { useCallback, useState } from 'react';
import { CARD_ACTION, Movie } from '../components/typedefs/typedefs';
import { useTimer } from './useTimer';
import { useLocalStorageMovie } from './useLocalStorageMovie';

const MAX_SELECTED_MOVIES = 20;

export const useMovie = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);
  const [cardAction, setCardAction] = useState<CARD_ACTION>(CARD_ACTION.ActionAdded);
  const delay = 1000;

  const [favoriteMovies, setMovie] = useLocalStorageMovie<Movie[]>('movies_favorite', []);

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

  const handleModifyMovie = useCallback((movie: Movie) => {
    const isAlreadyAdded = favoriteMovies.some(({ id }) => id === movie.id);

    if (isAlreadyAdded) {
      const newMovies = favoriteMovies.filter(({ id }) => id !== movie.id);

      setMovie(newMovies);
      setCardAction(CARD_ACTION.ActionDelete);
      handleChangeAlert();

      return;
    }

    const newMovies = [...favoriteMovies, movie];

    setMovie(newMovies);
    setCardAction(CARD_ACTION.ActionAdded);
    handleChangeAlert();
  }, [favoriteMovies, handleChangeAlert, setMovie]);

  return {
    cardAction,
    handleModifyMovie,
    openAlert,
    selectMovie,
    deleteMovie,
    handleChangeAlert,
    setOpenAlert,
    selectedMovies,
    favoriteMovies,
  };
};
