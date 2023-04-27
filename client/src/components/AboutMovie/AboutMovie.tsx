import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Hidden, Paper } from '@mui/material';
import { AboutMovieTitle } from './AboutMovieTitle/AboutMovieTitle';
import { AboutMovieMedia } from './AboutMovieMedia/AboutMovieMedia';
import { AboutMovieContent } from './AboutMovieContent/AboutMovieContent';
import { MoviesByIds } from '../typedefs/typedefs';
import { useResizingImage } from '../../hooks/useResizingImage';
import { AboutMovieOverview } from './AboutMovieOverview/AboutMovieOverview';

export const Container = styled(Box)(() => ({
  minHeight: 'calc(100vh - 70px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

interface Props {
  data: MoviesByIds,
}

export const AboutMovie: FC<Props> = (props) => {
  const { data } = props;

  const { replaceImagePath } = useResizingImage();

  const movieData = data?.moviesByIds[0];
  const image = replaceImagePath(movieData?.backdropPath, 'w1280');

  const BgImage = styled(Box)(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${image})`,
    filter: 'blur(3px)',
    zIndex: -1,
  }));

  return (
    <Container sx={{ p: 2 }}>
      <Paper
        sx={{
          p: 3,
          maxWidth: 600,
          position: 'relative',
          overflow: 'hidden',
          zIndex: 0,
        }}
        elevation={20}
      >
        <Box>
          <BgImage />

          <AboutMovieTitle title={movieData?.title} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <AboutMovieMedia movie={movieData} />
            </Box>

            <Box sx={{ pl: 2 }}>
              <AboutMovieContent movieData={movieData} />

              <Hidden only={['xs']}>
                <AboutMovieOverview movie={movieData} />
              </Hidden>
            </Box>
          </Box>

          <Box sx={{ pt: 2, display: { sm: 'none' } }}>
            <Box sx={{ fontWeight: 'bold', textShadow: '0px 0px 10px #fff' }}>
              {movieData?.overview}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
