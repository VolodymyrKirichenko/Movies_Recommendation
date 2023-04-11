import { Genre, MovieType } from '../typedefs/typedefs';
import { IMAGE_BASE_PATH } from '../../../config/ImageBasePath';
// const dateFormat = require('dateformat');

export class Movie {
  public id: string;
  public title: string;
  public releaseDate: string;
  public posterPath: string;
  public overview: string;
  public adult: boolean;
  public originalLanguage: string;
  public backdropPath: string;
  public popularity: number;
  public voteCount: number;
  public video: boolean;
  public voteAverage: number;
  public genres: Genre[];

  constructor(public movie: MovieType) {
    this.id = movie.id;
    this.title = movie.title;
    this.releaseDate = movie.release_date;
    this.posterPath = `${IMAGE_BASE_PATH}${movie.poster_path}`;
    this.adult = movie.adult;
    this.overview = movie.overview;
    this.originalLanguage = movie.original_language;
    this.backdropPath = `${IMAGE_BASE_PATH}${movie.backdrop_path}`;
    this.popularity = movie.popularity;
    this.voteCount = movie.vote_count;
    this.video = movie.video;
    this.voteAverage = movie.vote_average;
    this.genres = movie.genres;
  }

  // releaseDate(params) {
  //   try {
  //     const date = dateFormat(params)
  //       ? dateFormat(this.movie.release_date, 'paddedShortDate')
  //       : this.movie.release_date;
  //
  //     return date;
  //   } catch (e) {
  //     console.error(e);
  //     return this.movie.release_date;
  //   }
  // }
}
