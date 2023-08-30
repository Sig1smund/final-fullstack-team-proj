import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { App } from 'components/App';
import './index.css';
import './variables.css';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './utils/Spinner';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <BrowserRouter basename="/final-fullstack-team-proj">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
