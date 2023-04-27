import React, { FC } from 'react';
import { Box, Typography, CardContent } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { CardTooltip } from '../CardTooltipe/CardTooltipe';
import { Movie } from '../../../typedefs/typedefs';

interface Props {
  movie: Movie;
}

export const CardContentFile: FC<Props> = (props) => {
  const { movie } = props;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          {movie.title}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" component="div">
          {movie.releaseDate}
        </Typography>
      </CardContent>

      <CardTooltip movie={movie} />

      <Box sx={{ display: 'flex', p: 2 }}>
        <Typography variant="subtitle1" component="div">
          <FormattedMessage id="vote_average" />
          {`: ${movie.voteAverage}`}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" component="div">
          {movie.runtime}
        </Typography>
      </Box>
    </Box>
  );
};
