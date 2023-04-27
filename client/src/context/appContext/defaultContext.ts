import { LOCALES } from './const';
import { getFromStorage } from '../../hooks/useLocalStorage';

export default {
  locale: LOCALES.ENGLISH,
};

export const useDefaultContext = () => {
  return {
    locale: getFromStorage('locale') || LOCALES.ENGLISH,
  };
};
