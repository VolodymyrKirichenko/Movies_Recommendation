import { FC } from 'react';
import { Box } from '@mui/material';
import { Movie } from '../../typedefs/typedefs';
import { WatchButton } from './WatchButton/WatchButton';
import { ModalWindow } from './ModalWindow/ModalWindow';
import { MovieImage } from './MovieImage/MovieImage';
import { useToggle } from '../../../hooks/useToggle';

interface Props {
  movie: Movie;
}

export const AboutMovieMedia: FC<Props> = (props) => {
  const { movie } = props;

  const { handleChangeOpen, isOpen } = useToggle();

  return (
    <Box sx={{ position: 'relative' }}>
      <MovieImage image={movie.image} />

      <WatchButton onOpen={handleChangeOpen} movie={movie} />

      <ModalWindow
        movie={movie}
        onClose={handleChangeOpen}
        open={isOpen}
      />
    </Box>
  );
};
