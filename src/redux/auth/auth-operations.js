import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUpRequest,
  loginRequest,
  currentRequest,
  logoutRequest,
} from 'api/auth-api';
import { Notify } from 'notiflix';

import { toast } from 'react-toastify';

export const signup = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signUpRequest(body);
      Notify.success('Success registration');
      return data;
    } catch (error) {
      toast.error(error.response.data.message, { position: 'top-center' });

      return rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginRequest(body);
      Notify.success('Success login');
      return data;
    } catch (error) {
      if (error) {
        console.log(error.message);
      }
      Notify.failure(error.response.data.message);

      return rejectWithValue(error.response.data.message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await currentRequest(auth.token);
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logoutRequest();
      return data;
    } catch (error) {
      Notify.failure(error.response.data.message);
      return rejectWithValue(error.response.data.message);
    }
  }
);
