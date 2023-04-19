import { FC } from 'react';
import { Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { FormattedMessage } from 'react-intl';
import { CardMenu } from '../../../MovieCard/CardMenu/CardMenu';
import { MenuItems, StyledLink } from '../../../MovieCard/CardMenuData/CardMenuData';
import { Movie } from '../../../typedefs/typedefs';
import { useSearch } from '../../../../hooks/useSearch';

interface Props {
  movie: Movie,
}

export const SelectedCardMenu: FC<Props> = (props) => {
  const { movie } = props;

  const { getSearch } = useSearch();

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
      </Box>
    </CardMenu>
  );
};
