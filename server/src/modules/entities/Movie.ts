import { Genre, MovieType } from '../typedefs/typedefs';
import { IMAGE_BASE_PATH } from '../../config/ImageBasePath';

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
  public genreIds: number[];
  public genres: string;

  constructor(public movie: MovieType, genress: Genre[]) {
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
    this.genreIds = movie.genre_ids;
    this.genres = movie.genre_ids
      .map((genreId: number) => {
        const genre = genress.find((g) => g.id === genreId);

        return genre
          ? genre.name
          : '';
      })
      .filter((genreName: string) => genreName !== '')
      .join(', ');
  }
}
