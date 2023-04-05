import { styled } from '@mui/material/styles';
import { Box, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
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
  isPreviewMode: boolean,
}

export const CardInfo: FC<Props> = (props) => {
  const { isPreviewMode, movie } = props;
  const isGenresArray = Array.isArray(movie.genres);

  return (
    <CardInfoStyle>
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontSize: 14 }}>
          {movie.title}
        </Typography>

        {!isPreviewMode && isGenresArray ? (
          <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
            {movie.genres.map((item) => item.name).join(', ')}
          </Typography>
        ) : (
          <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
            {typeof movie.genres === 'string' && movie.genres}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="subtitle1"
          sx={{ 'font-size': 12 }}
          gutterBottom
        >
          {movie.releaseDate}
        </Typography>

        {!isPreviewMode ? (
          <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
            {`${movie.runtime}m`}
          </Typography>
        ) : (
          <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
            {movie.voteAverage}
          </Typography>
        )}
      </Box>
    </CardInfoStyle>
  );
};
