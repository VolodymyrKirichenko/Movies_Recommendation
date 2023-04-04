import { Card } from '@mui/material';
import React, { FC, useCallback } from 'react';
import { CardMenuData } from './CardMenuData/CardMenuData';
import { useLocalStorage } from '../../hooks/useLocaleStorage';
import { Movie } from '../typedefs/typedefs';
import { CardMediaFile } from './CardMedia/CardMedia';
import { CardInfo } from './CardInfo/CardInfo';

interface Props {
  movie: Movie,
  onCardSelect: (movie: Movie) => void,
  isPreviewMode: boolean,
  onChangeAlert?: () => void;
}

export const MovieCard: FC<Props> = (props) => {
  const {
    movie,
    onCardSelect,
    isPreviewMode,
    onChangeAlert,
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favoriteMovies, setFavoriteMovies, addToFavoriteMovies, removeMovie] = useLocalStorage(
    'movies_favorite',
    [],
  );
  // const [isRemove, setIsRemove] = useState(false);

  const isFilmAlreadyAdded = useCallback((m: Movie) => {
    return favoriteMovies.some((f) => f.id === m.id);
  }, [favoriteMovies]);

  const handleSelectMovie = useCallback((film: Movie) => {
    if (!isFilmAlreadyAdded(film)) {
      addToFavoriteMovies(film);

      if (onChangeAlert) {
        onChangeAlert();
      }
    }
  }, [addToFavoriteMovies, onChangeAlert, isFilmAlreadyAdded]);

  const handleDelete = useCallback(() => {
    if (isFilmAlreadyAdded(movie)) {
      removeMovie(movie.id);
    }
  }, [isFilmAlreadyAdded, movie, removeMovie]);

  return (
    <Card sx={{ maxWidth: 200, height: 400, position: 'relative' }}>
      {isPreviewMode && (
        <CardMenuData
          movie={movie}
          onCardSelect={onCardSelect}
          onSelectMovie={handleSelectMovie}
          isAdded={isFilmAlreadyAdded}
          onDeleteCard={handleDelete}
        />
      )}

      <CardMediaFile
        movie={movie}
        isPreviewMode={isPreviewMode}
        onCardSelect={onCardSelect}
      />

      <CardInfo
        movie={movie}
        isPreviewMode={isPreviewMode}
      />
    </Card>
  );
};
