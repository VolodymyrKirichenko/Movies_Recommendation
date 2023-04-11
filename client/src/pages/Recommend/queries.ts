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
        }
    }
`;
