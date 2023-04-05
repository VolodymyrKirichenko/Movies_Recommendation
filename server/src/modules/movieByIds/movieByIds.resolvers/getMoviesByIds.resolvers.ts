import axios from 'axios';
import { API_BASE_URL } from '../../../config/ApiBaseUrl';
import { API_KEY } from '../../../config/ApiKey';

export const getDetails = async (id: number, language: string) => {

  return await axios.get(`${API_BASE_URL}movie/${id}?api_key=${API_KEY}&language=${language}`);
};
