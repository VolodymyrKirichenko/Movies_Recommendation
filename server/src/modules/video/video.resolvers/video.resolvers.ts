import { video } from '../video.resolvers/videos.resolvers';

export const VideoResolvers = {
  Query: {
    video: video
  }
};
