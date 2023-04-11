import movies from './movies.resolvers';

export const MovieResolvers = {
  Query: {
    movies: movies
  }
};
