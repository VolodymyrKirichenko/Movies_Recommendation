import React, { FC } from 'react';
import { Box, Hidden } from '@mui/material';
import { FormattedMessage } from 'react-intl';
import { AboutMovieTooltip } from '../AboutMovieTooltip/AboutMovieTooltip';
import { Movie } from '../../typedefs/typedefs';

interface Props {
  movie: Movie,
}

export const AboutMovieOverview: FC<Props> = (props) => {
  const { movie } = props;

  const isLongMobileOverview = movie?.overview.length > 120;
  const isLongDesktopOverview = movie?.overview.length > 320;

  return (
    <Box>
      {movie.overview ? (
        <>
          <Box sx={{
            fontWeight: 'bold',
            textShadow: '0px 0px 10px #fff',
            display: { md: 'none', lg: 'none', xl: 'none' },
          }}
          >
            {isLongMobileOverview
              ? <AboutMovieTooltip movie={movie} lastSymbol={120} />
              : movie?.overview
            }
          </Box>

          <Hidden only={['xs', 'sm']}>
            <Box sx={{ fontWeight: 'bold', textShadow: '0px 0px 10px #fff' }}>
              {isLongDesktopOverview
                ? <AboutMovieTooltip movie={movie} lastSymbol={320} />
                : movie?.overview
              }
            </Box>
          </Hidden>
        </>
      ) : (
        <Box sx={{ fontWeight: 'bold', textShadow: '0px 0px 10px #fff' }}>
          <FormattedMessage id="selected_movie.overview" />
        </Box>
      )}
    </Box>
  );
};
