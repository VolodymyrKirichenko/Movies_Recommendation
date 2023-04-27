import React, { FC } from 'react';
import {
  Button, Tooltip, Box,
} from '@mui/material';
import { Movie } from '../../typedefs/typedefs';
import { textTruncation } from '../../../helpers/textTruncation';

interface Props {
  movie: Movie,
  lastSymbol: number,
}

export const AboutMovieTooltip: FC<Props> = (props) => {
  const { movie, lastSymbol } = props;
  const { overview } = movie;

  const shortOverview = textTruncation(overview, lastSymbol);

  return (
    <Tooltip title={overview} placement="right-end">
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
