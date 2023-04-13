export const useLanguageStorage = (name: string, data: any) => {
  if (!window || !window.localStorage) {
    return;
  }

  window.localStorage.setItem(name, JSON.stringify(data));
};

export const getFromStorage = (name: string) => {
  if (!window || !window.localStorage) {
    return null;
  }

  try {
    return JSON.parse(<string>window.localStorage.getItem(name));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return null;
  }
};
