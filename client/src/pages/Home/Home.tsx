import React, {
  FC, useCallback, useState,
} from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useQuery } from '@apollo/client';
import { FilterMenu } from '../../components/Filters/FilterMenu/FilterMenu';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MOVIES_QUERY } from './queries';
import { CARD_ACTION, Movie, MoviesFilterInput } from '../../components/typedefs/typedefs';
import { useMovie } from '../../hooks/useMovie';
import { SelectedMoviesSection } from '../../components/SelectedMoviesSection/SelectedMoviesSection';
import { useFilters } from '../../hooks/useFilters';
import { Filters } from '../../components/Filters/Filters';
import { MovieCardAlert } from '../../components/MovieCard/MovieCardAlert/MovieCardAlert';
import { Paginator } from '../../components/Paginator/Paginator';

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

  const [cardAction, setCardAction] = useState<CARD_ACTION>(CARD_ACTION.ActionAdded);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleChangePage = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
    setPage(selectedPage);
  };

  const handleChangeDrawer = () => {
    setDrawerOpen((prevDrawer) => !prevDrawer);
  };

  const onSubmit = useCallback((data: MoviesFilterInput) => {
    setFiltering(data);
    setDrawerOpen(false);
  }, [setFiltering]);

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FilterMenu
            filter={filter}
            onSubmit={onSubmit}
            isDrawerOpen={isDrawerOpen}
            onChangeDrawer={handleChangeDrawer}
          />

          <Paper elevation={3} sx={{ display: { xs: 'none', md: 'block' } }}>
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
                cardAction={cardAction}
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
                <Grid container spacing={1}>
                  {movieData.movies.results.map((movie: Movie) => (
                    <Grid key={movie.id} item xs={6} sm={4} md={4} lg={3}>
                      <MovieCard
                        movie={movie}
                        onCardSelect={selectMovie}
                        isPreviewMode
                        onChangeAlert={handleChangeAlert}
                        onCardAction={setCardAction}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>

            <Paginator
              filter={filter}
              movieData={movieData}
              onChangePage={handleChangePage}
            />
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
