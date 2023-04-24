import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { AboutMovie } from '../../components/AboutMovie/AboutMovie';
import { HomeLoader } from '../Home/HomeLoader/HomeLoader';
import { HomeError } from '../Home/HomeError/HomeError';
import { MOVIES_BY_IDS_QUERY } from '../Recommend/queries';

interface Props {
  bgPath: (url: string) => void,
}

export const SelectedMovie: FC<Props> = (props) => {
  const { bgPath } = props;

  const [searchParams] = useSearchParams();

  const ids = searchParams.getAll('ids').map(Number) || [];

  const {
    loading,
    error,
    data,
  } = useQuery(MOVIES_BY_IDS_QUERY, { variables: { ids } });

  useEffect(() => {
    if (data?.moviesByIds[0]?.backdropPath) {
      bgPath(data.moviesByIds[0].backdropPath);
    }
  }, [data, bgPath]);

  return (
    <>
      {loading && <HomeLoader />}

      {error && <HomeError text="No selected movie" />}

      {data && (
        <AboutMovie data={data} />
      )}
    </>
  );
};
