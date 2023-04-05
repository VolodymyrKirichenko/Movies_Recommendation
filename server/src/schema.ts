import { MovieSchema } from './modules/movie/movie.schemes/movie.schema';
import { MovieByIdsSchema } from './modules/movieByIds/movieByIds.schemes/movieByIds.schema';
import { GenreSchema } from './modules/genre/genre.schemes/genre.schema';


export const typeDefs = [
  MovieSchema,
  MovieByIdsSchema,
  GenreSchema,
];
