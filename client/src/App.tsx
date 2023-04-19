import { FC, useContext } from 'react';
import {
  CssBaseline,
  Container,
  Box,
} from '@mui/material';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from,
} from '@apollo/client';

import { Navigation } from './components/Navigation/Navigation';
import { Home } from './pages/Home/Home';
import { Favorites } from './pages/Favorites/Favorites';
import { Recommend } from './pages/Recommend/Recommend';
import { AppContext } from './context/appContext/appContext';
import { I18Provider } from './context/i18n/i18n';
import { SelectedMovie } from './pages/SelectedMovie/SelectedMovie';

export const App: FC = () => {
  const { state } = useContext(AppContext);
  const httpLink = new HttpLink({ uri: 'http://localhost:4000/api' });
  const localeMiddleware = new ApolloLink((operation, forward) => {
    const getContext = operation.getContext();
    const customHeaders = getContext.headers ? getContext.headers : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale,
      },
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
  });

  return (
    <I18Provider locale={state.locale}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <CssBaseline />
          <Navigation />

          <Box sx={{ backgroundColor: (theme) => theme.palette.grey[200] }}>
            <Container maxWidth="xl">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="recommend" element={<Recommend />} />
                <Route path="selectedMovie" element={<SelectedMovie />} />
              </Routes>
            </Container>
          </Box>
        </BrowserRouter>
      </ApolloProvider>
    </I18Provider>
  );
};
