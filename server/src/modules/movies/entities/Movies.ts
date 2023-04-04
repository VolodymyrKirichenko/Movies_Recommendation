import { MoviesType } from '../typedefs/typedefs';
import { Movie } from './Movie';

export class Movies {
  public page: number;
  public totalResults: number;
  public totalPages: number;
  public results: Movie[];

  constructor(public movies: MoviesType) {
    this.page = movies.page;
    this.totalResults = movies.total_results;
    this.totalPages = movies.total_pages;
    this.results = movies.results.map((movie) => new Movie(movie));
  }
}
