import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { token } from './api';

const postRegister = async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure('Login or password are incorrect');
  }
};

const postLogin = async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notify.failure('Login or password are incorrect');
  }
};

const postLogout = async () => {
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
};

const getCurrentUser = async (_, thunkAPI) => {
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
};

export const authRequests = {
  postRegister,
  postLogin,
  postLogout,
  getCurrentUser,
};
