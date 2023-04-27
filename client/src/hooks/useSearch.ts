import { useSearchParams } from 'react-router-dom';

export const useSearch = () => {
  const [searchParams] = useSearchParams();

  const getSearch = (id: string) => {
    searchParams.set('title', 'movie');
    searchParams.set('ids', id);

    return String(searchParams);
  };

  return {
    getSearch,
  };
};
