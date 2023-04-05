import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';

export const ModalTitle: FC = () => {
  return (
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
  );
};
