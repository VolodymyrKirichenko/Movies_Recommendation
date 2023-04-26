export interface MoviesType {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieType[];
}

export interface Videos {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
  id?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MoviesFilterInput {
  page: number;
  sortBy: string;
  sortDirection: SORT_DIRECTION;
  includeAdult: boolean;
  primaryReleaseYear: number;
  genre: number;
}

export enum SORT_DIRECTION {
  desc,
  asc
}

export interface MovieType {
  id: string;
  title: string;
  release_date: string;
  poster_path: string | null;
  overview: string;
  adult: boolean;
  original_language: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  genre_ids: number[];
  genres: string;
}

export interface MovieByIdsType {
  id: string;
  title: string;
  release_date: string;
  poster_path: string | null;
  overview: string | null;
  adult: boolean;
  original_language: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: Videos;
  vote_average: number;
  genres: Genre[];
  runtime: number | null;
}

export interface Context {
  locale: string;
}
