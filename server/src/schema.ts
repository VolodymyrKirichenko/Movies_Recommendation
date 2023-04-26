import { MovieSchema } from './modules/movie/movie.schemes/movie.schema';
import { MovieByIdsSchema } from './modules/movieByIds/movieByIds.schemes/movieByIds.schema';
import { GenreSchema } from './modules/genre/genre.schemes/genre.schema';
import { VideoSchema } from './modules/video/video.schemes/video.shema';


export const typeDefs = [
  MovieSchema,
  MovieByIdsSchema,
  GenreSchema,
  VideoSchema,
];
