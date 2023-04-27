import React, { FC } from 'react';
import {
  Button, Tooltip, Box,
} from '@mui/material';
import { Movie } from '../../../typedefs/typedefs';
import { textTruncation } from '../../../../helpers/textTruncation';

interface Props {
  movie: Movie,
  lastSymbol: number,
}

export const CardInfoTooltip: FC<Props> = (props) => {
  const { movie, lastSymbol } = props;
  const { title } = movie;

  const shortTitle = textTruncation(title, lastSymbol);

  return (
    <Tooltip title={title}>
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
