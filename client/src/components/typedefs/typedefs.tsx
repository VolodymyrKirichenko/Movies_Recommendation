export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  genres: Genre[];
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

export interface Movies {
  page: number;
  totalResults: number;
  totalPages: number;
  results: Movie[];
}

export interface MoviesFilterInput {
  page: number,
  sortBy: string,
  sortDirection: string,
  includeAdult: boolean,
  year?: number,
  primaryReleaseYear?: number,
  genre?: number,
}

export enum CARD_ACTION {
  ActionAdded = 'Added',
  ActionDelete = 'Delete',
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
