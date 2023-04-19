import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Movie } from '../../typedefs/typedefs';
import { AboutMovieText } from '../AboutMovieText/AboutMovieText';

export const LineOfText = styled(Typography)(() => ({
  variant: 'subtitle1',
}));

interface Genre {
  name: string,
}

interface Props {
  movieData: Movie;
}

export const AboutMovieContent: FC<Props> = (props) => {
  const { movieData } = props;

  const voteAverage = Math.round(10 * movieData.voteAverage) / 10;
  const movieGenres = Array.isArray(movieData?.genres)
    ? movieData?.genres.map((genre: Genre) => genre.name).join(', ')
    : '';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pb: 3 }}>
      <AboutMovieText
        info={voteAverage}
        textId="selected_movie.vote_average"
      />

      <AboutMovieText
        info={movieData?.releaseDate}
        textId="selected_movie.release_date"
      />

      <AboutMovieText
        info={movieData?.runtime}
        textId="selected_movie.runtime"
      />

      <AboutMovieText
        info={movieData?.originalLanguage}
        textId="selected_movie.original_language"
      />

      {movieGenres && (
        <AboutMovieText
          info={movieGenres}
          textId="selected_movie.genres"
        />
      )}
    </Box>
  );
};
