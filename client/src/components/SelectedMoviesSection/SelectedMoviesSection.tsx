import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { FC } from 'react';
import { MovieCardSelectedField } from './MovieCardSelectedField/MovieCardSelectedField';
import { MovieCardSelectedEmptyField } from './MovieCardSelectedEmptyField/MovieCardSelectedEmptyField';
import { Movie } from '../typedefs/typedefs';

export const SelectedMovies = styled(Paper)(({ theme }) => ({
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

interface Props {
  selectedMovies: Movie[],
  onDelete: (movie: Movie) => void,
}

export const SelectedMoviesSection: FC<Props> = (props) => {
  const { onDelete, selectedMovies } = props;

  return (
    !selectedMovies.length ? (
      <MovieCardSelectedEmptyField />
    ) : (
      <MovieCardSelectedField
        onDelete={onDelete}
        selectedMovies={selectedMovies}
      />
    )
  );
};
