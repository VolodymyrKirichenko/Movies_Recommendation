import gql from 'graphql-tag';

export const VideoSchema = gql`
    type Query {
        video: Video
    }

    type Video {
        iso6391: String
        iso31661: String
        name: String
        key: String
        site: String
        size: Int
        type: String
        official: Boolean
        publishedAt: String
        id: String!
    }
`;
