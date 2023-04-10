import React, {
  FC, useCallback, useMemo, useState,
} from 'react';
import {
  Box,
  Grid,
  Paper,
  Stack,
  Hidden,
  Typography,
  Drawer, Button,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { useQuery } from '@apollo/client';
import Pagination from '@mui/material/Pagination';
import { GENRES_QUERY } from '../../components/Filters/queries';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MOVIES_QUERY } from './queries';
import { CARD_ACTION, Movie, MoviesFilterInput } from '../../components/typedefs/typedefs';
import { useMovie } from '../../hooks/useMovie';
import { SelectedMoviesSection } from '../../components/SelectedMoviesSection/SelectedMoviesSection';
import { useFilters } from '../../hooks/useFilters';
import { Filters } from '../../components/Filters/Filters';
import { MovieCardAlert } from '../../components/MovieCard/MovieCardAlert/MovieCardAlert';
import { FilterList } from '../../components/Filters/FiltersList/FiltersList';

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
  const { data: genresData } = useQuery(GENRES_QUERY);

  const [cardAction, setCardAction] = useState<CARD_ACTION>(CARD_ACTION.ActionAdded);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<unknown>, selectedPage: number) => {
    setPage(selectedPage);
  };

  const pageMovies = movieData?.movies?.totalResults.length < 500
    ? movieData.movies.totalResults
    : 500;

  const onSubmit = useCallback((data: MoviesFilterInput) => {
    setFiltering(data);
    setDrawerOpen(false);
  }, [setFiltering]);

  const handleChangeDrawer = () => {
    setDrawerOpen((prevDrawer) => !prevDrawer);
  };

  const list = useMemo(() => (
    <FilterList
      filter={filter}
      genresData={genresData}
      onSubmit={onSubmit}
    />
  ), [filter, genresData, onSubmit]);

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Hidden only={['lg', 'xl', 'md']}>
            <Button
              variant="contained"
              onClick={handleChangeDrawer}
              sx={{ mr: 2 }}
            >
              Filters
            </Button>
          </Hidden>

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

      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={handleChangeDrawer}
      >
        {list}
      </Drawer>
    </Box>
  );
};
