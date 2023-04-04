import gql from 'graphql-tag';

export const EventSchema = gql`
    type Query {
        movies(page: Int): Movies
    }
    
    type Genre {
        id: Int!
        name: String
    }
    
    type Movie {
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
    }
    
    type Movies {
        page: Int!
        totalResults: Int!
        totalPages: Int!
        results: [Movie!]!
    }
`;
