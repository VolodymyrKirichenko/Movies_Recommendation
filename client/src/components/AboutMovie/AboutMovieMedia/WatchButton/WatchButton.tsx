import { FC } from 'react';
import { Box } from '@mui/material';

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
  '&:hover': {
    opacity: '80%',
  },
};

interface Props {
  onOpen: () => void,
}

export const WatchButton: FC<Props> = (props) => {
  const { onOpen } = props;

  return (
    <Box
      sx={watchButton}
      onClick={onOpen}
    >
      Watch trailer
    </Box>
  );
};
