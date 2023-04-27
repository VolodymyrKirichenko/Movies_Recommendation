import { FC } from 'react';
import {
  Box, Modal, useMediaQuery, useTheme,
} from '@mui/material';
import Youtube from 'react-youtube';
import { Movie } from '../../../typedefs/typedefs';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

interface Props {
  open: boolean,
  onClose: () => void,
  movie: Movie,
}

export const ModalWindow: FC<Props> = (props) => {
  const { onClose, open, movie } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const playerHeight = isMobile ? 300 : 400;
  const playerWidth = isMobile ? 350 : 600;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Youtube
          videoId={movie.video?.key}
          opts={{
            height: playerHeight,
            width: playerWidth,
            playerVars: {
              autoplay: 1,
              controls: 1,
              cc_load_policy: 0,
              fs: 0,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      </Box>
    </Modal>
  );
};
