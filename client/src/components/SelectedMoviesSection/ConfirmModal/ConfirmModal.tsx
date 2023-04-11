import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  FC, useCallback, useEffect, useState,
} from 'react';
import { ModalAlert } from './ModalAlert/ModalAlert';
import { ModalTitle } from './ModalTitle/ModalTitle';
import { ModalInput } from './ModalInput/ModalInput';

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
    url,
    open,
    title,
    onClose,
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
        <ModalTitle />

        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>

        <ModalInput
          url={url}
          copy={copy}
        />

        {openAlert && (
          <ModalAlert onOpen={setOpenAlert} />
        )}
      </Box>
    </Modal>
  );
};
