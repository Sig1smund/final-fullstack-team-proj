import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { noticesReducer } from './notices/noticesSlice';
import { newsReducer } from './news/newsSlice';
import { servicesReducer } from './services/servicesSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const noticePersistConfig = {
  key: 'notice',
  storage,
};

const newsPersistConfig = {
  key: 'news',
  storage,
};

const servicesPersistConfig = {
  key: 'services',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    notices: persistReducer(noticePersistConfig, noticesReducer),
    news: persistReducer(newsPersistConfig, newsReducer),
    services: persistReducer(servicesPersistConfig, servicesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authReducer, noticesReducer, servicesReducer, newsReducer),
});

export const persistor = persistStore(store);
