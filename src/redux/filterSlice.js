import { createSlice } from '@reduxjs/toolkit';

const initialState = { contactsFilter: '', trashFilter: '' };

export const filterSlice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    setContactsFilter(state, { payload }) {
      state.contactsFilter = payload;
    },
    setTrashFilter(state, { payload }) {
      state.trashFilter = payload;
    },
    clearFilter(state) {
      state.contactsFilter = '';
      state.trashFilter = '';
    },
  },
});

export const { setContactsFilter, clearFilter, setTrashFilter } =
  filterSlice.actions;
