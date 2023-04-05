import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Box, MenuItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Movie } from '../../typedefs/typedefs';
import { CardMenu } from '../CardMenu/CardMenu';

const MenuItems = styled(MenuItem)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 10,
}));

interface Props {
  movie: Movie,
  onDeleteCard: () => void,
  isMovieAdded: () => boolean;
  onCardSelect: (movie: Movie) => void,
  onSelectMovie: (movie: Movie) => void;
}

export const CardMenuData: FC<Props> = (props) => {
  const {
    movie,
    isMovieAdded,
    onCardSelect,
    onDeleteCard,
    onSelectMovie,
  } = props;

  return (
    <CardMenu>
      <Box>
        <MenuItems onClick={() => onCardSelect(movie)}>
          <FormatListBulletedIcon />
          Add to list
        </MenuItems>

        {!isMovieAdded() ? (
          <MenuItems onClick={() => onSelectMovie(movie)}>
            <FavoriteBorderIcon />
            Favorite
          </MenuItems>
        ) : (
          <MenuItems onClick={onDeleteCard}>
            <FavoriteIcon />
            Favorite
          </MenuItems>
        )}
      </Box>
    </CardMenu>
  );
};
