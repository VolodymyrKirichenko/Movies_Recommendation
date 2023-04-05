import gql from 'graphql-tag';

export const MovieByIdsSchema = gql`
    type Query {
        moviesByIds(ids: [Int]): [MovieByIds]
    }

    type MovieByIds {
        id: ID!
        title: String!
        originalTitle: String
        releaseDate(format: String): String!
        posterPath: String
        genres: [Genre]
        adult: Boolean
        overview: String
        originalLanguage: String
        backdropPath: String
        popularity: Float
        voteCount: Int
        video: Boolean
        voteAverage: Float
        runtime: Int
    }
`;
