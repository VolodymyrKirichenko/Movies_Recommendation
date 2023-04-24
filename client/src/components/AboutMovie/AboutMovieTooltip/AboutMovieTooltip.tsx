import React, { FC } from 'react';
import {
  Button, Tooltip, Box,
} from '@mui/material';
import { Movie } from '../../typedefs/typedefs';

interface Props {
  movie: Movie,
  lastSymbol: number,
}

export const AboutMovieTooltip: FC<Props> = (props) => {
  const { movie, lastSymbol } = props;

  const shortOverview = movie.overview.substring(0, lastSymbol);

  return (
    <Tooltip title={movie.overview} placement="right-end">
      <Box>
        {shortOverview}

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
