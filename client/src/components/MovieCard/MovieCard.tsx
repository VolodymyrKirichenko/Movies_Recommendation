import { Card } from '@mui/material';
import React, { FC, useCallback, useMemo } from 'react';
import { CardMenuData } from './CardMenuData/CardMenuData';
import { useMovieLocaleStorage } from '../../hooks/useMovieLocaleStorage';
import { CARD_ACTION, Movie } from '../typedefs/typedefs';
import { CardMediaFile } from './CardMedia/CardMedia';
import { CardInfo } from './CardInfo/CardInfo';

interface Props {
  movie: Movie,
  onCardSelect: (movie: Movie) => void,
  isPreviewMode: boolean,
  onChangeAlert?: () => void;
  onCardAction?: (action: CARD_ACTION) => void;
}

export const MovieCard: FC<Props> = (props) => {
  const {
    movie,
    onCardSelect,
    isPreviewMode,
    onChangeAlert,
    onCardAction,
  } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favoriteMovies, _, addToFavoriteMovies, removeMovie] = useMovieLocaleStorage(
    'movies_favorite',
    [],
  );

  const isFilmAlreadyAdded = useMemo(() => {
    return favoriteMovies.some((f) => f.id === movie.id);
  }, [favoriteMovies, movie.id]);

  const handleSelectMovie = useCallback((film: Movie) => {
    if (!isFilmAlreadyAdded) {
      addToFavoriteMovies(film);

      if (onCardAction) {
        onCardAction(CARD_ACTION.ActionAdded);
      }

      if (onChangeAlert) {
        onChangeAlert();
      }
    }
  }, [isFilmAlreadyAdded, addToFavoriteMovies, onCardAction, onChangeAlert]);

  const handleDelete = useCallback(() => {
    if (isFilmAlreadyAdded) {
      removeMovie(movie.id);

      if (onCardAction) {
        onCardAction(CARD_ACTION.ActionDelete);
      }

      if (onChangeAlert) {
        onChangeAlert();
      }
    }
  }, [isFilmAlreadyAdded, movie, onCardAction, onChangeAlert, removeMovie]);

  return (
    <Card sx={{
      height: 440,
      position: 'relative',
    }}
    >
      {isPreviewMode && (
        <CardMenuData
          movie={movie}
          onCardSelect={onCardSelect}
          onSelectMovie={handleSelectMovie}
          isMovieAdded={isFilmAlreadyAdded}
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
