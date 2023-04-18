import {
  useReducer, createContext, useMemo,
} from 'react';
import { useDefaultContext } from './defaultContext';
import { LOCALES } from './const';
import { Action, AppContextProviderProps, AppContextType } from '../../components/typedefs/typedefs';

export const AppContext = createContext<AppContextType>({
  state: {
    locale: LOCALES.ENGLISH,
  },
  dispatch: () => null,
});

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'setLocale':
      window.localStorage.setItem('locale', JSON.stringify(action.locale));

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
