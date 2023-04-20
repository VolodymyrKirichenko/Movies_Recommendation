import gql from 'graphql-tag';

export const MovieSchema = gql`
    type Query {
        movies(filter: MoviesFilterInput, query: String, page: Int): Movies
    }

    input MoviesFilterInput {
        page: Int
        sortBy: String
        sortDirection: SORT_DIRECTION
        includeAdult: Boolean
        primaryReleaseYear: Int
        genre: Int
    }

    enum SORT_DIRECTION {
        desc,
        asc
    }
    
    type Movie {
        id: ID!
        title: String!
        originalTitle: String
        releaseDate(format: String): String!
        posterPath: String
        adult: Boolean
        overview: String
        originalLanguage: String
        backdropPath: String
        popularity: Float
        voteCount: Int
        video: Boolean
        voteAverage: Float
        genreIds: [Int]
        genres: String
    }
    
    type Movies {
        page: Int!
        totalResults: Int!
        totalPages: Int!
        results: [Movie!]!
    }
`;
