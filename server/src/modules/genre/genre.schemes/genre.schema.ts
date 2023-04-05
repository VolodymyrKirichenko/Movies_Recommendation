import gql from 'graphql-tag';

export const GenreSchema = gql`
    type Query {
        genres: [Genre]
    }

    type Genre {
        id: Int!
        name: String
    }
`;
