import { Genre, MovieByIdsType } from '../typedefs/typedefs';
import { IMAGE_BASE_PATH } from '../../config/ImageBasePath';

export class MovieByIds {
  public id: string;
  public title: string;
  public releaseDate: string;
  public posterPath: string;
  public overview: string | null;
  public adult: boolean;
  public originalLanguage: string;
  public backdropPath: string;
  public popularity: number;
  public voteCount: number;
  public video: boolean;
  public voteAverage: number;
  public genres: Genre[];
  public runtime: number | null;

  constructor(public movieByIds: MovieByIdsType) {
    this.id = movieByIds.id;
    this.title = movieByIds.title;
    this.releaseDate = movieByIds.release_date;
    this.posterPath = `${IMAGE_BASE_PATH}${movieByIds.poster_path}`;
    this.adult = movieByIds.adult;
    this.overview = movieByIds.overview;
    this.originalLanguage = movieByIds.original_language;
    this.backdropPath = `${IMAGE_BASE_PATH}${movieByIds.backdrop_path}`;
    this.popularity = movieByIds.popularity;
    this.voteCount = movieByIds.vote_count;
    this.video = movieByIds.video;
    this.voteAverage = movieByIds.vote_average;
    this.genres = movieByIds.genres;
    this.runtime = movieByIds.runtime;
  }
}
