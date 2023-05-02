import { useCallback, useState } from 'react';

type LocalStorage<T> = [T, (value: T | ((val: T) => T)) => void]

export const useLocalStorage = <T>(
  key: string,
  initial?: T,
): LocalStorage<T> => {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initial;
    } catch (error) {
      console.error(error);

      return initial;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      try {
        setStored((prev) => {
          const next = value instanceof Function ? value(prev) : value;

          window.localStorage.setItem(key, JSON.stringify(next));

          return next;
        });
      } catch (error) {
        console.error(error);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return [stored, setValue];
};
