import { Videos } from '../typedefs/typedefs';

export class Video {
  public iso6391?: string;
  public iso31661?: string;
  public name?: string;
  public key?: string;
  public site?: string;
  public size?: number;
  public type?: string;
  public official?: boolean;
  public publishedAt?: string;
  public id?: string;

  constructor(public video: Videos) {
    this.iso6391 = video.iso_639_1;
    this.iso31661 = video.iso_3166_1;
    this.name = video.name;
    this.key = video.key;
    this.site = video.site;
    this.size = video.size;
    this.type = video.type;
    this.official = video.official;
    this.publishedAt = video.published_at;
    this.id = video.id;
  }
}
