import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { MovieCardSelected } from '../MovieCardSelected/MovieCardSelected';
import { MovieCardSelectedForm } from '../MovieCardSelectedForm/MovieCardSelectedForm';
import { ConfirmModal } from '../ConfirmModal/ConfirmModal';
import { Movie, Values } from '../../typedefs/typedefs';
import { SelectedMovies } from '../SelectedMoviesSection';

interface Props {
  selectedMovies: Movie[],
  onDelete: (movie: Movie) => void,
}

export const MovieCardSelectedField: FC<Props> = (props) => {
  const { selectedMovies, onDelete } = props;

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
  );
};
