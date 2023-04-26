import axios from 'axios';
import { API_BASE_URL } from '../../../config/ApiBaseUrl';
import { API_KEY } from '../../../config/ApiKey';

export const getVideo = async (id: number) => {

  return await axios.get(`${API_BASE_URL}movie/${id}/videos?api_key=${API_KEY}`);
};
