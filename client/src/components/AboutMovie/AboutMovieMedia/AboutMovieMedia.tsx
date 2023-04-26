import { FC, useCallback, useState } from 'react';
import { Box, Hidden } from '@mui/material';
import { Movie } from '../../typedefs/typedefs';
import { WatchButton } from './WatchButton/WatchButton';
import { ModalWindow } from './ModalWindow/ModalWindow';

interface Props {
  movie: Movie,
}

export const AboutMovieMedia: FC<Props> = (props) => {
  const { movie } = props;

  const [open, setOpen] = useState(false);

  const handleChangeOpen = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <Hidden only={['xs', 'sm']}>
        <Box>
          <img
            src={movie.image}
            alt="movie"
          />
        </Box>
      </Hidden>

      <Box sx={{ display: { md: 'none', lg: 'none', xl: 'none' } }}>
        <img
          width="180px"
          src={movie.image}
          alt="movie"
        />
      </Box>

      <WatchButton onOpen={handleChangeOpen} />

      <ModalWindow
        movie={movie}
        onClose={handleChangeOpen}
        open={open}
      />
    </Box>
  );
};
