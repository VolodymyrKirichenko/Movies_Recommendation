import { Genres } from '../../entities/Genres';
import { getGenres } from './getGenres.resolvers';

export const genres = async (): Promise<Genres[]> => {
  const response = await getGenres();

  return response.data.genres.map((genre: Genres) => new Genres(genre));
};
