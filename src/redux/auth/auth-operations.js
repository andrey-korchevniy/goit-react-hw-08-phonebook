import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from 'constants/constants';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const message =
      error.response.status === 500
        ? 'We have some problems with server'
        : 'There`s error on your side. Try later.';
    Notify.failure(message);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure('Login or password are incorrect');
  }
});

export const logOut = createAsyncThunk('users/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    const message =
      error.response.status === 500
        ? 'We have some problems with server'
        : 'There`s error on your side. Try later.';
    Notify.failure(message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      Notify.failure('There are some problem with your side');
    }
  }
);
