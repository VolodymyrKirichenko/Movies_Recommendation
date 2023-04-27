import { FC } from 'react';
import { Box } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { Movie } from '../../../typedefs/typedefs';

const watchButton = {
  position: 'absolute',
  height: '5vw',
  width: '100%',
  bgcolor: 'lightgrey',
  opacity: '50%',
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  fontWeight: 'bold',
  '&:hover': {
    opacity: '80%',
  },
};

interface Props {
  onOpen: () => void,
  movie: Movie,
}

export const WatchButton: FC<Props> = (props) => {
  const { onOpen, movie } = props;

  return (
    movie.video?.key ? (
      <Box
        sx={watchButton}
        onClick={onOpen}
      >
        <FormattedMessage id="watch_button" />
      </Box>
    ) : (
      <Box
        sx={watchButton}
      >
        <FormattedMessage id="no_trailer" />
      </Box>
    )
  );
};
