import { Dispatch, ReactNode } from 'react';

export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  genres: Genre[];
}

export interface Videos {
  iso6391?: string;
  iso31661?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  publishedAt?: string;
  id?: string;
}

export interface Movie {
  id: string;
  image: string;
  title: string;
  releaseDate: string;
  genres: Genre[] | string;
  runtime: string;
  genreIds: number[];
  voteAverage: number;
  overview: string;
  originalLanguage: string;
  backdropPath: string;
  video?: Videos;
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

export interface Action {
  type: string;
  locale?: string;
}

export interface AppContextType {
  state: {
    locale: string;
  };
  dispatch: Dispatch<Action>;
}

export interface AppContextProviderProps {
  children: ReactNode;
}

export interface Errors {
  listName?: string;
}

export interface Values {
  listName?: string;
}

export interface MoviesByIds {
  moviesByIds: Movie[];
}

export interface MovieCardType {
  movie: Movie;
  onCardSelect: () => void;
}
