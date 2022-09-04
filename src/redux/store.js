import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { filterSlice } from './filter/filterSlice';
import { serverApi } from './apiSlice';
import { middleware } from './middleware';
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
    [serverApi.reducerPath]: serverApi.reducer,
    filter: filterSlice.reducer,
    auth: persistReducer(authReducerConfig, authReducer),
  },
  middleware,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
