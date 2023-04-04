import React, { useReducer, createContext } from 'react';
import defaultContext from './defaultContext';

interface AppContextProviderProps {
  children: React.ReactNode;
}

interface Action {
  type: string;
  locale?: string;
}

interface AppContextType {
  state: typeof defaultContext;
  dispatch: React.Dispatch<Action>;
}

export const AppContext = createContext<AppContextType>({
  state: defaultContext,
  dispatch: () => null,
});

const reducer = (state: any, action: Action) => {
  switch (action.type) {
    case 'reset':
      return defaultContext;
    case 'setLocale':
      return { ...state, locale: action.locale };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = React.useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
