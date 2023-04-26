import { gql } from '@apollo/client';

export const MOVIES_BY_IDS_QUERY = gql`
    query moviesByIds($ids: [Int]) {
        moviesByIds(ids: $ids) {
            id
            title
            image: posterPath
            releaseDate
            genres {
                id
                name
            }
            runtime
            overview
            originalLanguage
            voteAverage
            backdropPath
            video {
                iso6391
                iso31661
                name
                key
                site
                size
                type
                official
                publishedAt
                id
            }
        }
    }
`;
