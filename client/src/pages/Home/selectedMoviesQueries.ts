import { gql } from '@apollo/client';

export const SELECTED_MOVIES_QUERY = gql`
    query Movies($query: String, $page: Int) {
        movies(query: $query, page: $page) {
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
                backdropPath
            }
        }
    }
`;
