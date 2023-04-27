import { getDetails } from './getMoviesByIds.resolvers';
import { MovieByIds } from '../../entities/MovieByIds';
import { Context } from '../../typedefs/typedefs';
import { video } from '../../video/video.resolvers/videos.resolvers';

interface Args {
  ids: number[];
}

export const moviesByIds = async (parent: any, { ids }: Args, context: Context) => {
  try {
    return await Promise.all(
      ids.map(async (id: number) => {
        const response = await getDetails(id, context.locale);
        const movieDetails = response.data;

        let videoDetails = null;

        try {
          videoDetails = await video(id);
        } catch (error) {
          console.error(`Failed to fetch video details for movie with id ${id}: ${error}`);
        }

        return new MovieByIds(movieDetails, videoDetails);
      })
    );
  } catch (error) {
    throw new Error('Failed to fetch movie details by ids');
  }
};
