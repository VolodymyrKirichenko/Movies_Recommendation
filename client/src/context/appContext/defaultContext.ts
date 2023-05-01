import { LOCALES } from './const';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default {
  locale: LOCALES.ENGLISH,
};

export const useDefaultContext = () => {
  const [locale] = useLocalStorage('locale', []);

  return {
    locale: locale || LOCALES.ENGLISH,
  };
};
