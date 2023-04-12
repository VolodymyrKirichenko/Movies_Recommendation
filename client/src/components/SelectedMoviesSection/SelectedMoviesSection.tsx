import { styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Typography,
} from '@mui/material';
import { FC, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FormattedMessage } from 'react-intl';
import { ConfirmModal } from './ConfirmModal/ConfirmModal';
import { MovieCardSelected } from './MovieCardSelected/MovieCardSelected';
import { MovieCardSelectedForm, Values } from './MovieCardSelectedForm/MovieCardSelectedForm';
import { Movie } from '../typedefs/typedefs';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: 600,
  position: 'sticky',
  top: theme.spacing(2),
  overflow: 'scroll',
}));

const NoMovies = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

interface Props {
  selectedMovies: Movie[],
  onDelete: (movie: Movie) => void,
}

export const SelectedMoviesSection: FC<Props> = (props) => {
  const { onDelete, selectedMovies } = props;

  const [listName, setListName] = useState('');
  const [link, setLink] = useState('');

  const onSubmit = (values: Values) => {
    const ids = selectedMovies.map((movie) => movie.id);
    const newLink = `${window.location.host}/recommend?title=${values.listName}&ids=${ids.join()}`;

    setLink(newLink);
    setListName(listName);
  };

  const onCloseConfirmModal = () => {
    setLink('');
  };

  return (
    !selectedMovies.length ? (
      <SelectedMovies>
        <NoMovies>
          <Box
            component="img"
            sx={{
              width: '50%',
              opacity: '.6',
            }}
            alt="No images."
            src="images/noMovies.png"
          />

          <Typography variant="h5" mt={2}>
            <FormattedMessage id="no_selected_movies" />
          </Typography>
        </NoMovies>
      </SelectedMovies>
    ) : (
      <SelectedMovies>
        <Box>
          {selectedMovies.map((movie) => (
            <MovieCardSelected
              key={movie.id}
              movie={movie}
              onDelete={onDelete}
            />
          ))}
        </Box>

        <Box pt={2}>
          <MovieCardSelectedForm onSubmit={onSubmit} />
        </Box>

        <ConfirmModal
          url={link}
          title={listName}
          open={!!link}
          onClose={onCloseConfirmModal}
        />
      </SelectedMovies>
    )
  );
};
