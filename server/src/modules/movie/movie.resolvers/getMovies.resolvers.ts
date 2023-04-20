import { MoviesFilterInput } from '../../typedefs/typedefs';
import axios from 'axios';
import { API_BASE_URL } from '../../../config/ApiBaseUrl';
import { API_KEY } from '../../../config/ApiKey';

export const discoverMovie = async (
  filter: MoviesFilterInput | string, language: string, page?: number,
) => {
  if (typeof filter === 'string') {
    return await axios.get(`${API_BASE_URL}search/movie?api_key=${API_KEY}&language=${language}&query=${filter}&page=${page}&include_adult=false`);
  } else {
    return await axios.get(`${API_BASE_URL}discover/movie?api_key=${API_KEY}&language=${language}&page=${filter.page}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&primary_release_year=${filter.primaryReleaseYear}&with_genres=${filter.genre}`);
  }
};
