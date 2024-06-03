import { createAsyncThunk } from '@reduxjs/toolkit';

import * as countryApi from '../../api/country-api';

export const fetchCountries = createAsyncThunk(
  'country/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await countryApi.getAllCountriesRequest();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoruteCountries = createAsyncThunk(
  'country/fetchFavorite',
  async (_, thunkAPI) => {
    try {
      const data = await countryApi.getFavoriteCountries();
      console.log('data from operation', data.countries);
      return data.countries;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
