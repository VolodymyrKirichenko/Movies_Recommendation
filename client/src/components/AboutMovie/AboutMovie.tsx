import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Box, Paper, Typography,
} from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { AboutMovieContent } from './AboutMovieContent/AboutMovieContent';
import { MoviesByIds } from '../typedefs/typedefs';

export const Container = styled(Box)(() => ({
  minHeight: 'calc(100vh - 70px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

interface Props {
  data: MoviesByIds;
}

export const AboutMovie: FC<Props> = (props) => {
  const { data } = props;

  const movieData = data?.moviesByIds[0];

  return (
    <Container>
      <Paper sx={{ p: 3, maxWidth: 600 }} elevation={7}>
        <Box>
          <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
              {movieData?.title}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ p: 2 }}>
              <img
                src={movieData.image}
                alt="movie"
              />
            </Box>

            <Box sx={{ p: 1 }}>
              <AboutMovieContent movieData={movieData} />

              <Box>
                {movieData.overview ? (
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {movieData?.overview}
                  </Typography>
                ) : (
                  <strong>
                    <FormattedMessage id="selected_movie.overview" />
                  </strong>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
