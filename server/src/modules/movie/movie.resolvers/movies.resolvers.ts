import { Context, MoviesFilterInput } from '../../typedefs/typedefs';
import { discoverMovie } from './getMovies.resolvers';
import { getGenres } from '../../genre/genre.resolvers/getGenres.resolvers';
import { Movies } from '../../../modules/entities/Movies';

interface Args {
  filter: MoviesFilterInput | string;
  query: string;
  page: number;
}

export default async function movies(parent: any, args: Args, context: Context) {
  let moviesResponse;

  if (args.query) {
    moviesResponse = await discoverMovie(args.query, context.locale, args.page);
  } else {
    moviesResponse = await discoverMovie(args.filter, context.locale);
  }

  const { page, total_results, total_pages, results } = moviesResponse.data;
  const genres = await getGenres(context.locale);

  return new Movies({ page, total_results, total_pages, results }, genres.data.genres);
}
