import { Genre } from '../typedefs/typedefs';

export class Genres {
  public id: number;
  public name: string;

  constructor(public genres: Genre) {
    this.id = genres.id;
    this.name = genres.name;
  }
}
