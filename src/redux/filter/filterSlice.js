import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      console.log(payload);
      state.filter = payload;
    },
    clearFilter(state) {
      state.filter = '';
    },
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;
