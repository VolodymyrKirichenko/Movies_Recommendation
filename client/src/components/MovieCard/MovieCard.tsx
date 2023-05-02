import { Card } from '@mui/material';
import React, { FC } from 'react';
import { SelectedCardMenu } from '../SelectedMoviesSection/MovieCardSelected/SelectedCardMenu/SelectedCardMenu';
import { CardMenuData } from './CardMenuData/CardMenuData';
import { Movie } from '../typedefs/typedefs';
import { CardMediaFile } from './CardMedia/CardMedia';
import { CardInfo } from './CardInfo/CardInfo';

interface Props {
  movie: Movie,
  isPreviewMode: boolean,
  isAdded?: boolean;
  onCardSelect: (movie: Movie) => void,
  onModifyMovies?: (movie: Movie) => void;
}

export const MovieCard: FC<Props> = (props) => {
  const {
    movie,
    isPreviewMode,
    isAdded,
    onCardSelect,
    onModifyMovies,
  } = props;

  return (
    <Card sx={{
      height: 440,
      position: 'relative',
    }}
    >
      {isPreviewMode ? (
        <CardMenuData
          movie={movie}
          onCardSelect={onCardSelect}
          onSelectMovie={onModifyMovies}
          isMovieAdded={isAdded}
        />
      ) : (
        <SelectedCardMenu movie={movie} />
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
