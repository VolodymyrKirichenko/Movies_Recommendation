import { FC } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

export const HomeLoader: FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
};
