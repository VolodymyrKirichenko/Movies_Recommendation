import axios from 'axios';

import { Movies } from './entities/Movies';
import { API_BASE_URL } from '../../config/ApiBaseUrl';
import { API_KEY } from '../../../src/config/ApiKey';

export const getPopular = async (page: number) => {
  const result = await axios.get(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

  return new Movies(result.data);
};
