import { getDetails } from './getMoviesByIds.resolvers';
import { MovieByIds } from '../../entities/MovieByIds';
import { Context } from '../../typedefs/typedefs';

interface Args {
  ids: number[];
}

export const moviesByIds = async (parent: any, { ids }: Args, context: Context) => {
  try {
    return await Promise.all(
      ids.map(async (id: number) => {
        const response = await getDetails(id, context.locale);

        return new MovieByIds(response.data);
      })
    );
  } catch (error) {
    throw new Error('Failed to fetch movie details by ids');
  }
};
