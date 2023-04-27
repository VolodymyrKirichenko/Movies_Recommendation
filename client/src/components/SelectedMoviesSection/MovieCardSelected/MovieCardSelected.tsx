import React, { FC } from 'react';
import {
  Box,
  Card,
  CardMedia,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormattedMessage } from 'react-intl';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Movie } from '../../typedefs/typedefs';
import { CardMenu } from '../../MovieCard/CardMenu/CardMenu';
import { CardContentFile } from './CardContent/CardContent';
import { MenuItems, StyledLink } from '../../MovieCard/CardMenuData/CardMenuData';
import { useSearch } from '../../../hooks/useSearch';

interface Props {
  movie: Movie,
  onDelete: (movie: Movie) => void,
}

export const MovieCardSelected: FC<Props> = (props) => {
  const { onDelete, movie } = props;

  const { getSearch } = useSearch();

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

          <MenuItems onClick={() => onDelete(movie)}>
            <DeleteIcon />
            <FormattedMessage id="burger_menu.delete" />
          </MenuItems>
        </Box>
      </CardMenu>
    </Card>
  );
};
