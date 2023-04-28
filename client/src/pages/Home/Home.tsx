import React, { FC, useCallback, useState } from 'react';
import {
  Box, Container, Grid, Paper,
} from '@mui/material';
import { useLazyQuery, useQuery } from '@apollo/client';
import { HomeLoader } from './HomeLoader/HomeLoader';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { MOVIES_QUERY } from './queries';
import { Movie, MoviesFilterInput } from '../../components/typedefs/typedefs';
import { useMovie } from '../../hooks/useMovie';
import { SelectedMoviesSection } from '../../components/SelectedMoviesSection/SelectedMoviesSection';
import { useFilters } from '../../hooks/useFilters';
import { MovieCardAlert } from '../../components/MovieCard/MovieCardAlert/MovieCardAlert';
import { Paginator } from '../../components/Paginator/Paginator';
import { HomeError } from './HomeError/HomeError';
import { Filters } from '../../components/Filters/Filters';
import { SearchByTitleInput } from '../../components/SearchByTitleInput/SearchByTitleInput';
import { SELECTED_MOVIES_QUERY } from './selectedMoviesQueries';

export const Home: FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const { filter, setPage, setFiltering } = useFilters();

  const [searchMovies, { data: searchMoviesData }] = useLazyQuery(SELECTED_MOVIES_QUERY);
  const {
    error,
    loading,
    refetch,
    data: movieData,
  } = useQuery(MOVIES_QUERY, { variables: { filter } });

  const {
    openAlert,
    selectMovie,
    deleteMovie,
    selectedMovies,
    handleChangeAlert,
    handleModifyMovie,
    cardAction,
    favoriteMovies,
  } = useMovie();

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

  const handleIsClickedChange = (value: boolean) => {
    setIsClicked(value);
  };

  const listOfMovies = (!isClicked && searchMoviesData) ? searchMoviesData : movieData;

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <SearchByTitleInput
          filter={filter}
          refetch={refetch}
          setPage={setPage}
          isClicked={isClicked}
          onClick={handleIsClickedChange}
          searchMovies={searchMovies}
        />

        <Grid container spacing={2}>
          <Filters
            filter={filter}
            onSubmit={onSubmit}
            isDrawerOpen={isDrawerOpen}
            onChangeDrawer={handleChangeDrawer}
          />

          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              {openAlert && (
                <MovieCardAlert
                  cardAction={cardAction}
                  onChangeAlert={handleChangeAlert}
                />
              )}

              <Box sx={{ flexGrow: 1, padding: 1, height: 'max-content' }}>
                {loading && <HomeLoader />}

                {error && <HomeError text='No movies found' />}

                {listOfMovies && (
                <Grid container spacing={1}>
                  {listOfMovies.movies.results.map((movie: Movie) => {
                    const isAlreadyAdded = favoriteMovies.some(({ id }) => id === movie.id);

                    return (
                      <Grid key={movie.id} item xs={6} sm={4} md={4} lg={3}>
                        <MovieCard
                          movie={movie}
                          onCardSelect={selectMovie}
                          isPreviewMode
                          onModifyMovies={handleModifyMovie}
                          isAdded={isAlreadyAdded}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
                )}
              </Box>

              <Paginator
                filter={filter}
                movieData={listOfMovies}
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
    </Container>
  );
};
