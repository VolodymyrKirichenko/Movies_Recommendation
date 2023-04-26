import gql from 'graphql-tag';

export const MovieByIdsSchema = gql`
    type Query {
        moviesByIds(ids: [Int]): [MovieByIds]
    }

    type Videos {
        iso6391: String
        iso31661: String
        name: String
        key: String
        site: String
        size: Int
        type: String
        official: Boolean
        publishedAt: String
        id: String
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
        video: Videos
        voteAverage: Float
        runtime: Int
    }
`;
