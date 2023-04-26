import React, { FC } from 'react';
import { Box, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { Movies, MoviesFilterInput } from '../typedefs/typedefs';

interface Props {
  movieData: {
    movies: Movies;
  },
  onChangePage: (event: React.ChangeEvent<unknown>, selectedPage: number) => void,
  filter: MoviesFilterInput,
}

export const Paginator: FC<Props> = (props) => {
  const {
    filter,
    movieData,
    onChangePage,
  } = props;

  const pageMovies = movieData?.movies?.totalPages < 500
    ? movieData.movies.totalPages
    : 500;

  return (
    <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Stack spacing={2}>
        <Pagination
          count={pageMovies}
          page={filter.page}
          onChange={onChangePage}
        />
      </Stack>
    </Box>
  );
};
