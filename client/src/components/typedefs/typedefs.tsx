export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  id: string;
  image: string;
  title: string;
  releaseDate: string;
  genres: Genre[];
  runtime: string;
  genreIds: number[];
  voteAverage: number;
  overview: string;
}

export interface MoviesFilterInput {
  page: number,
  sortBy: string,
  sortDirection: string,
  includeAdult: boolean
  year: number
  primaryReleaseYear: number
  genre: number
}

export interface InitialValues {
  page: number,
  sortBy: string,
  sortDirection: string,
  includeAdult: boolean,
}

export interface MovieCardType {
  movie: Movie;
  onCardSelect: () => void;
}
