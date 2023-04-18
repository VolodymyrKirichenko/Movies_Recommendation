import React, { FC } from 'react';
import {
  Button, Tooltip, Box,
} from '@mui/material';
import { Movie } from '../../../typedefs/typedefs';

interface Props {
  movie: Movie,
}

export const CardInfoTooltip: FC<Props> = (props) => {
  const { movie } = props;

  const shortTitle = movie.title.substring(0, 25);

  return (
    <Tooltip title={movie.title}>
      <Box>
        {shortTitle}

        <Button
          color="primary"
          sx={{ minWidth: 'max-content', p: 0 }}
        >
          ...
        </Button>
      </Box>
    </Tooltip>
  );
};
