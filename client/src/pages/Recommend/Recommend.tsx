import { useSearchParams } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Container,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { HomeError } from '../Home/HomeError/HomeError';
import { Movie } from '../../components/typedefs/typedefs';
import { MOVIES_BY_IDS_QUERY } from './queries';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useMovie } from '../../hooks/useMovie';
import { HomeLoader } from '../Home/HomeLoader/HomeLoader';

interface Params {
  ids: number[],
  title: string | null,
}

export const Recommend: FC = () => {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState<Params>({
    ids: [],
    title: '',
  });

  const { selectMovie } = useMovie();

  const {
    loading,
    error,
    data,
  } = useQuery(MOVIES_BY_IDS_QUERY, { variables: { ids: params.ids } });

  useEffect(() => {
    const idsForParams = searchParams.get('ids');
    const title = searchParams.get('title');
    const ids = idsForParams !== null
      ? idsForParams.split(',').map((id) => Number(id))
      : [];

    setParams({
      ids,
      title,
    });
  }, [searchParams]);

  return (
    <Container maxWidth="xl">
      <Box sx={{ height: '100%' }}>
        <Paper elevation={3} sx={{ padding: 5, minHeight: 'calc(100vh - 70px)' }}>
          {loading && <HomeLoader />}

          {error && <HomeError text="No selected movies" />}

          {data?.moviesByIds && (
          <Grid container spacing={2} sx={{ padding: 5 }}>
            {data.moviesByIds.map((movie: Movie) => (
              <Grid key={movie.id} item xs={6} sm={4} md={3} lg={2}>
                <MovieCard
                  movie={movie}
                  onCardSelect={selectMovie}
                  isPreviewMode={false}
                />
              </Grid>
            ))}
          </Grid>
          )}
        </Paper>
      </Box>
    </Container>
  );
};
