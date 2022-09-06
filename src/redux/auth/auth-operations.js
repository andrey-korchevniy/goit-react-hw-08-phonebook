import { createAsyncThunk } from '@reduxjs/toolkit';
import { authRequests } from '../../api/authRequests';

export const register = createAsyncThunk(
  'auth/register',
  authRequests.postRegister
);

export const logIn = createAsyncThunk('auth/login', authRequests.postLogin);

export const logOut = createAsyncThunk('users/logout', authRequests.postLogout);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  authRequests.getCurrentUser
);
