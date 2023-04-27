import { Video } from '../../entities/Video';
import { getVideo } from './getVideo.resolvers';

export const video = async (id: number): Promise<Video> => {
  const response = await getVideo(id);

  const trailer = response.data.results.find((vid: Video) => vid.name === 'Official Trailer');

  return new Video(trailer);
};
