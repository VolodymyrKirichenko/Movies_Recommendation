import { GenreResolvers } from './modules/genre/genre.resolvers/genre.resolvers';
import { MovieResolvers } from './modules/movie/movie.resolvers/movie.resolvers';
import { MovieByIdsResolvers } from './modules/movieByIds/movieByIds.resolvers/movieByIds.resolvers';
import { VideoResolvers } from './modules/video/video.resolvers/video.resolvers';

export const resolvers = [
  GenreResolvers,
  MovieResolvers,
  MovieByIdsResolvers,
  VideoResolvers,
];
