import { useSearchParams } from 'react-router-dom';
import React, { FC, useEffect, useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { useQuery } from '@apollo/client';
import LinearProgress from '@mui/material/LinearProgress';
import { Movie } from '../../components/typedefs/typedefs';
import { MOVIES_BY_IDS_QUERY } from './queries';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { useMovie } from '../../hooks/useMovie';

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
    data,
  } = useQuery(MOVIES_BY_IDS_QUERY, { variables: { ids: params.ids } });

  useEffect(() => {
    const ids = searchParams.get('ids');
    const title = searchParams.get('title');

    setParams({
      ids: ids !== null
        ? ids.split(',').map((id) => Number(id))
        : [],
      title,
    });
  }, [searchParams]);

  return (
    <Box sx={{ height: '100%' }}>
      <Paper elevation={3} sx={{ padding: 5, minHeight: 'calc(100vh - 70px)' }}>
        {loading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}

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
  );
};
