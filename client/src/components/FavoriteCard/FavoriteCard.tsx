import {
  Box,
  Card,
  CardMedia,
  MenuItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';
import { CardMenu } from '../MovieCard/CardMenu/CardMenu';
import { Movie } from '../typedefs/typedefs';
import { CardInfo } from './CardInfo/CardInfo';

const MenuItems = styled(MenuItem)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 10,
}));

interface Props {
  movie: Movie,
  onDelete: (movieId: string) => void,
}

export const FavoriteCard: FC<Props> = (props) => {
  const { movie, onDelete } = props;

  return (
    <Card sx={{ maxWidth: 200, height: 400, position: 'relative' }}>
      <CardMenu>
        <MenuItems onClick={() => onDelete(movie.id)}>
          <DeleteIcon />
          <FormattedMessage id="burger_menu.delete" />
        </MenuItems>
      </CardMenu>

      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="260"
          image={movie.image}
          alt={movie.title}
        />
      </Box>

      <CardInfo movie={movie} />
    </Card>
  );
};
