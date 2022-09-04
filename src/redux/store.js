import { configureStore } from '@reduxjs/toolkit';
import { mockApi } from './apiSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    [mockApi.reducerPath]: mockApi.reducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(mockApi.middleware),
});

setupListeners(store.dispatch);
