import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import {
  FC, useCallback, useEffect, useState,
} from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 200,
  width: 400,
  bgcolor: 'background.paper',
  border: '2px transparent #000',
  boxShadow: 24,
  padding: 4,
  borderRadius: 1,
};

interface Props {
  open: boolean,
  url: string,
  title: string,
  onClose: () => void;
}

export const ConfirmModal: FC<Props> = (props) => {
  const {
    url, title, onClose, open,
  } = props;

  const [openAlert, setOpenAlert] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(url);

    setOpenAlert(true);
  }, [url]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (openAlert) {
      timer = setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

        <Box sx={{ position: 'relative' }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              position: 'absolute',
              left: '25%',
              bottom: -20,
            }}
          >
            My favorite movies
          </Typography>
        </Box>

        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>

        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            marginTop: '24px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
          }}
          elevation={7}
        >

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="List URL"
            inputProps={{ 'aria-label': 'list URL' }}
            value={url}
          />

          <IconButton href={url} target="_blank" sx={{ p: '10px' }} aria-label="preview">
            <VisibilityIcon />
          </IconButton>

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

          <IconButton
            color="primary"
            sx={{ p: '10px' }}
            aria-label="copy to clipboard"
            onClick={copy}
          >
            <ContentCopyIcon />
          </IconButton>
        </Paper>

        {openAlert && (
          <Paper elevation={7}>
            <Alert
              action={(
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              )}
              sx={{ mb: 2 }}
            >
              Copied!
            </Alert>
          </Paper>
        )}
      </Box>
    </Modal>
  );
};
