import axios from 'axios';
import { API_BASE_URL } from '../../../config/ApiBaseUrl';
import { API_KEY } from '../../../config/ApiKey';

export const getGenres = async (language: string) => {
  return axios.get(`${API_BASE_URL}genre/movie/list?api_key=${API_KEY}&language=${language}`);
};
