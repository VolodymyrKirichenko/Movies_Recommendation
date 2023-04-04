import React, { FC } from 'react';
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useQuery } from '@apollo/client';
import Pagination from '@mui/material/Pagination';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MOVIES_QUERY } from './queries';
import { Movie, MoviesFilterInput } from '../../components/typedefs/typedefs';
import { useMovie } from '../../hooks/useMovie';
import { SelectedMoviesSection } from '../../components/SelectedMoviesSection/SelectedMoviesSection';
import { useFilters } from '../../hooks/useFilters';
import { Filters } from '../../components/Filters/Filters';
import { MovieCardAlert } from '../../components/MovieCard/MovieCardAlert/MovieCardAlert';

export const Home: FC = () => {
  const { filter, setPage, setFiltering } = useFilters();
  const { loading, error, data: movieData } = useQuery(MOVIES_QUERY, { variables: { filter } });
  const {
    openAlert,
    selectMovie,
    deleteMovie,
    selectedMovies,
    handleChangeAlert,
  } = useMovie();

  const handleChange = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
    setPage(selectedPage);
  };

  const pageMovies = movieData?.movies?.totalResults.length < 500
    ? movieData.movies.totalResults
    : 500;

  const onSubmit = (data: MoviesFilterInput) => {
    setFiltering(data);
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Filters
              onSubmit={onSubmit}
              initialValues={filter}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper elevation={3}>
            {openAlert && (
              <MovieCardAlert
                onChangeAlert={handleChangeAlert}
              />
            )}

            <Box sx={{ flexGrow: 1, padding: 1, height: 'max-content' }}>
              {loading && (
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
              )}

              {error && (
                <Typography>
                  try again
                </Typography>
              )}

              {movieData && (
                <Grid container spacing={2}>
                  {movieData.movies.results.map((movie: Movie) => (
                    <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                      <MovieCard
                        movie={movie}
                        onCardSelect={selectMovie}
                        isPreviewMode
                        onChangeAlert={handleChangeAlert}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>

            <Box mt={2} pb={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack spacing={2}>
                <Pagination
                  count={pageMovies}
                  page={filter.page}
                  onChange={handleChange}
                />
              </Stack>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <SelectedMoviesSection
            selectedMovies={selectedMovies}
            onDelete={deleteMovie}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
