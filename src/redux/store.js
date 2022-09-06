import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { filterSlice } from './filter/filterSlice';
import { contactsApi } from './contacts-api/contactsApi';
import { middleware } from './contacts-api/middleware';
import authReducer from './auth/auth-slice';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const authReducerConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
    auth: persistReducer(authReducerConfig, authReducer),
  },
  middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
