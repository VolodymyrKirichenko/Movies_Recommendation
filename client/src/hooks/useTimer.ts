import { useEffect } from 'react';

interface Options {
  openAlert: boolean,
  setOpenAlert: (value: boolean) => void,
}

export const useTimer = (options: Options) => {
  const { setOpenAlert, openAlert } = options;

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (openAlert) {
      timer = setTimeout(() => {
        setOpenAlert(false);
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [openAlert, setOpenAlert]);
};
