import React, { FC } from 'react';
import {
  Card,
  CardMedia,
  MenuItem,
} from '@mui/material';

import { Movie } from '../../typedefs/typedefs';
import { CardMenu } from '../../MovieCard/CardMenu/CardMenu';
import { CardContentFile } from './CardContent/CardContent';

interface Props {
  movie: Movie,
  onDelete: (movie: Movie) => void,
}

export const MovieCardSelected: FC<Props> = (props) => {
  const { onDelete, movie } = props;

  return (
    <Card sx={{ display: 'flex', marginBottom: 1, position: 'relative' }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={movie.image}
        alt={movie.title}
      />

      <CardContentFile movie={movie} />

      <CardMenu>
        <MenuItem onClick={() => onDelete(movie)}>
          Delete
        </MenuItem>
      </CardMenu>
    </Card>
  );
};
