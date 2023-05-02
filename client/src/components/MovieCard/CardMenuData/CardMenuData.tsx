import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Box, MenuItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Movie } from '../../typedefs/typedefs';
import { CardMenu } from '../CardMenu/CardMenu';
import { useSearch } from '../../../hooks/useSearch';

export const MenuItems = styled(MenuItem)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 10,
}));

export const StyledLink = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  textDecoration: 'none',
  color: 'inherit',
}));

interface Props {
  movie: Movie,
  isMovieAdded?: boolean;
  onCardSelect: (movie: Movie) => void,
  onSelectMovie?: (movie: Movie) => void;
}

export const CardMenuData: FC<Props> = (props) => {
  const {
    movie,
    isMovieAdded,
    onSelectMovie,
    onCardSelect,
  } = props;

  const { getSearch } = useSearch();

  const isMovieMissing = !isMovieAdded && onSelectMovie;

  return (
    <CardMenu>
      <Box>
        <MenuItems>
          <StyledLink
            to={{
              pathname: '/selectedMovie',
              search: getSearch(movie.id),
            }}
            target="_blank"
            aria-label="preview"
          >
            <InfoOutlinedIcon />
            <FormattedMessage id="burger_menu.info" />
          </StyledLink>
        </MenuItems>

        <MenuItems onClick={() => onCardSelect(movie)}>
          <FormatListBulletedIcon />
          <FormattedMessage id="burger_menu.select" />
        </MenuItems>

        {isMovieMissing ? (
          <MenuItems onClick={() => onSelectMovie(movie)}>
            <FavoriteBorderIcon />
            <FormattedMessage id="burger_menu.favorite" />
          </MenuItems>
        ) : (
          onSelectMovie && (
            <MenuItems onClick={() => onSelectMovie(movie)}>
              <FavoriteIcon />
              <FormattedMessage id="burger_menu.favorite" />
            </MenuItems>
          )
        )}
      </Box>
    </CardMenu>
  );
};
