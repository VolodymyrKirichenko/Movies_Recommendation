import { moviesByIds } from './moviesByIds.resolvers';

export const MovieByIdsResolvers = {
  Query: {
    moviesByIds: moviesByIds
  }
};
