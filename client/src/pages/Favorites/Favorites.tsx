import React, { FC, useCallback } from 'react';
import {
  Box,
  Grid,
  Paper,
  Container,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { FormattedMessage } from 'react-intl';
import { Movie } from '../../components/typedefs/typedefs';
import { useMovieLocaleStorage } from '../../hooks/useMovieLocaleStorage';
import { FavoriteCard } from '../../components/FavoriteCard/FavoriteCard';

const NoMovies = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  padding: theme.spacing(2),
  color: 'black',
  fontSize: 27,
  textAlign: 'center',
}));

export const Favorites: FC = () => {
  const [
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    favoriteMovies, setFavoriteMovies, addToFavoriteMovies, removeMovie,
  ] = useMovieLocaleStorage(
    'movies_favorite',
    [],
  );

  const handleDelete = useCallback((movieId: string) => {
    removeMovie(movieId);
  }, [removeMovie]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ height: '100%' }}>
        <Paper elevation={3} sx={{ pl: 5, pr: 5, minHeight: 'calc(100vh - 70px)' }}>
          {favoriteMovies.length ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Div><FormattedMessage id="your_favorite_movies" /></Div>

              <Grid container spacing={2}>
                {favoriteMovies.map((movie: Movie) => (
                  <Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
                    <FavoriteCard
                      movie={movie}
                      onDelete={handleDelete}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          ) : (
            <NoMovies>
              <Box
                component="img"
                sx={{
                  width: '50%',
                  opacity: '.6',
                }}
                alt="No images."
                src="images/noMovies.png"
              />

              <Typography variant="h2" mt={2} sx={{ textAlign: 'center' }}>
                <FormattedMessage id="no_selected_movies" />
              </Typography>
            </NoMovies>
          )}
        </Paper>
      </Box>
    </Container>
  );
};
