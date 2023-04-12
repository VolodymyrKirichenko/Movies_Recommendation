import React, { FC } from 'react';
import {
  Card,
  CardMedia,
  MenuItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { styled } from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormattedMessage } from 'react-intl';
import { Movie } from '../../typedefs/typedefs';
import { CardMenu } from '../../MovieCard/CardMenu/CardMenu';
import { CardContentFile } from './CardContent/CardContent';

const MenuItems = styled(MenuItem)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 10,
}));

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
        <MenuItems onClick={() => onDelete(movie)}>
          <DeleteIcon />
          <FormattedMessage id="burger_menu.delete" />
        </MenuItems>
      </CardMenu>
    </Card>
  );
};
