import { genres } from './genres.resolvers';

export const GenreResolvers = {
  Query: {
    genres: genres
  }
};
