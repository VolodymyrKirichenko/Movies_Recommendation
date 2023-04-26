import React, { FC } from 'react';
import {
  Button, Tooltip, Box,
} from '@mui/material';
import { Movie } from '../../../typedefs/typedefs';

interface Props {
  movie: Movie,
  lastSymbol: number,
}

export const CardInfoTooltip: FC<Props> = (props) => {
  const { movie, lastSymbol } = props;

  const shortTitle = movie.title.substring(0, lastSymbol);

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