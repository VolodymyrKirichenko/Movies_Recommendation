import { useEffect } from 'react';

interface Options {
  openAlert: boolean,
  setOpenAlert: (value: boolean) => void,
  delay: number,
}

export const useTimer = (options: Options) => {
  const { setOpenAlert, openAlert, delay } = options;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (openAlert) {
      timer = setTimeout(() => {
        setOpenAlert(false);
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [delay, openAlert, setOpenAlert]);
};
