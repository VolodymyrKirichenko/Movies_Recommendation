import { styled } from '@mui/material/styles';
import {
  Box, CardContent, Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { CardInfoTooltip } from './CardInfoTooltip/CardInfoTooltip';
import { Movie } from '../../typedefs/typedefs';

const CardInfoStyle = styled(CardContent)(({ theme }) => ({
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '35%',
}));

interface Props {
  movie: Movie,
}

export const CardInfo: FC<Props> = (props) => {
  const { movie } = props;

  return (
    <CardInfoStyle>
      <Box>
        {movie.title.length > 40 ? (
          <CardInfoTooltip movie={movie} lastSymbol={25} />
        ) : (
          <Box>
            {movie.title}
          </Box>
        )}

        <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
          {typeof movie.genres === 'string' && movie.genres}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: 12 }}
          gutterBottom
        >
          {movie.releaseDate}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
          {movie.voteAverage}
        </Typography>

      </Box>
    </CardInfoStyle>
  );
};
