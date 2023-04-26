import { Genre, MovieByIdsType, Videos } from '../typedefs/typedefs';
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
  public video: {
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
  };
  public voteAverage: number;
  public genres: Genre[];
  public runtime: number | null;

  constructor(public movieByIds: MovieByIdsType, videoDetails: Videos | null) {
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
    this.video = {
      iso6391: videoDetails?.iso_639_1,
      iso31661: videoDetails?.iso_3166_1,
      name: videoDetails?.name,
      key: videoDetails?.key,
      site: videoDetails?.site,
      size: videoDetails?.size,
      type: videoDetails?.type,
      official: videoDetails?.official,
      publishedAt: videoDetails?.published_at,
      id: videoDetails?.id,
    };
    this.voteAverage = movieByIds.vote_average;
    this.genres = movieByIds.genres;
    this.runtime = movieByIds.runtime;
  }
}
