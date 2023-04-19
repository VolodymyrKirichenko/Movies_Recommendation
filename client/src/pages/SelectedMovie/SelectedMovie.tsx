import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { HomeLoader } from '../Home/HomeLoader/HomeLoader';
import { HomeError } from '../Home/HomeError/HomeError';
import { MOVIES_BY_IDS_QUERY } from '../Recommend/queries';

export const SelectedMovie: FC = () => {
  const [searchParams] = useSearchParams();

  const ids = searchParams.getAll('ids').map(Number) || [];

  const {
    loading,
    error,
    data,
  } = useQuery(MOVIES_BY_IDS_QUERY, { variables: { ids } });

  return (
    <>
      {loading && <HomeLoader />}

      {error && <HomeError text="No selected movie" />}

      {data && (data.moviesByIds[0].title)}
    </>
  );
};
