import { getPopular } from '../src/modules/movies/movies';

interface Args {
  page: number;
}

export default async function movies(parent: any, args: Args) {
  return await getPopular(args.page);
}
