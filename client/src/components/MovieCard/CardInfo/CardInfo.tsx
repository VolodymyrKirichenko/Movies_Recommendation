import { styled } from '@mui/material/styles';
import { Box, CardContent, Typography } from '@mui/material';
import React, { FC, useMemo } from 'react';
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

  const getGenres = useMemo(() => {
    if (!isPreviewMode && Array.isArray(movie.genres)) {
      return movie.genres.map((item) => item.name).join(', ');
    }

    return typeof movie.genres === 'string' && movie.genres;
  }, [isPreviewMode, movie.genres]);

  return (
    <CardInfoStyle>
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontSize: 14 }}>
          {movie.title}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontSize: 10 }}>
          {getGenres}
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
          {!isPreviewMode
            ? `${movie.runtime}m`
            : `${movie.voteAverage}`
          }
        </Typography>
      </Box>
    </CardInfoStyle>
  );
};
