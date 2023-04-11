import React, { FC, useCallback } from 'react';
import {
  Box, Grid, Paper, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Movie } from '../../components/typedefs/typedefs';
import { useLocalStorage } from '../../hooks/useLocaleStorage';
import { FavoriteCard } from '../../components/FavoriteCard/FavoriteCard';

const NoMovies = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const Favorites: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favoriteMovies, setFavoriteMovies, addToFavoriteMovies, removeMovie] = useLocalStorage(
    'movies_favorite',
    [],
  );

  const handleDelete = useCallback((movieId: string) => {
    removeMovie(movieId);
  }, [removeMovie]);

  return (
    <Box sx={{ height: '100%' }}>
      <Paper elevation={3} sx={{ padding: 5, minHeight: 'calc(100vh - 70px)' }}>
        {favoriteMovies.length ? (
          <Grid container spacing={2} sx={{ padding: 5 }}>
            {favoriteMovies.map((movie: Movie) => (
              <Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
                <FavoriteCard
                  movie={movie}
                  onDelete={handleDelete}
                />
              </Grid>
            ))}
          </Grid>
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

            <Typography variant="h2" mt={2}>
              No selected movies
            </Typography>
          </NoMovies>
        )}
      </Paper>
    </Box>
  );
};
