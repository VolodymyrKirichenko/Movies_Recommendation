import ReactDOM from 'react-dom';
import { AppContextProvider } from './context/appContext/appContext';
import { App } from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root'),
);

reportWebVitals();
