export interface MoviesType {
  page: number;
  total_results: number;
  total_pages: number;
  results: MovieType[];
}

export interface Genre {
  id: number;
  genre: string;
}

export interface MovieType {
  id: string;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  adult: boolean;
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  genres: Genre[];
}
