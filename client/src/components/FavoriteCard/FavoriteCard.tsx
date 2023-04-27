import {
  Box,
  Card,
  CardMedia,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CardMenu } from '../MovieCard/CardMenu/CardMenu';
import { Movie } from '../typedefs/typedefs';
import { CardInfo } from './CardInfo/CardInfo';
import { useSearch } from '../../hooks/useSearch';
import { MenuItems, StyledLink } from '../MovieCard/CardMenuData/CardMenuData';

interface Props {
  movie: Movie,
  onDelete: (movieId: string) => void,
}

export const FavoriteCard: FC<Props> = (props) => {
  const { movie, onDelete } = props;

  const { getSearch } = useSearch();

  return (
    <Card sx={{ height: 400, position: 'relative' }}>
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

          <MenuItems onClick={() => onDelete(movie.id)}>
            <DeleteIcon />
            <FormattedMessage id="burger_menu.delete" />
          </MenuItems>
        </Box>
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
