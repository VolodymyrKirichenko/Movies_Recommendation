import { gql } from '@apollo/client';

export const MOVIES_QUERY = gql`
    query Movies($filter: MoviesFilterInput, $query: String, $page: Int) {
        movies(filter: $filter, query: $query, page: $page) {
            page
            totalResults
            totalPages
            results {
                id
                title
                releaseDate
                image: posterPath
                genreIds
                genres
                voteAverage
                overview
            }
        }
    }
`;
