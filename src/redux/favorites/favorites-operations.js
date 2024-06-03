import { createAsyncThunk } from '@reduxjs/toolkit';

import * as favoriteApi from '../../api/favorites-api';

export const addFavorite = createAsyncThunk(
  'users/addFavorite',
  async (countryId, thunkAPI) => {
    try {
      const data = await favoriteApi.addFavoriteRequest(countryId);
      console.log('data', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteFavorite = createAsyncThunk(
  'users/deleteFavorite',
  async (countryId, thunkAPI) => {
    try {
      const data = await favoriteApi.deleteFavoriteRequest(countryId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
