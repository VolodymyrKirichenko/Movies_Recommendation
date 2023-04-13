import {
  useReducer, createContext, Dispatch, ReactNode, useMemo,
} from 'react';
import { useDefaultContext } from './defaultContext';
import { useLanguageStorage } from '../../hooks/useLanguageStorage';
import { LOCALES } from './const';

interface AppContextProviderProps {
  children: ReactNode;
}

export interface Action {
  type: string;
  locale?: string;
}

interface AppContextType {
  state: {
    locale: string;
  };
  dispatch: Dispatch<Action>;
}

export const AppContext = createContext<AppContextType>({
  state: {
    locale: LOCALES.ENGLISH,
  },
  dispatch: () => null,
});

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'setLocale':
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useLanguageStorage('locale', action.locale);

      return { ...state, locale: action.locale };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const defaultContext = useDefaultContext();
  const [state, dispatch] = useReducer(reducer, defaultContext);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
