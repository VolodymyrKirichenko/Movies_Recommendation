import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormattedMessage } from 'react-intl';

export const ModalTitle: FC = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        sx={{ textAlign: 'center' }}
      >
        <FormattedMessage id="confirm_modal_title" />
      </Typography>
    </Box>
  );
};
