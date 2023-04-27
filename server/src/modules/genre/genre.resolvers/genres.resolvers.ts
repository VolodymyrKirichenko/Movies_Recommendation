import { Genres } from '../../entities/Genres';
import { getGenres } from './getGenres.resolvers';

export const genres = async (language: string): Promise<Genres[]> => {
  const response = await getGenres(language);

  return response.data.genres.map((genre: Genres) => new Genres(genre));
};
