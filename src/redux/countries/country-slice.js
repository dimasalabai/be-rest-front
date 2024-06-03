import { createSlice } from '@reduxjs/toolkit';

import { fetchCountries, fetchFavoruteCountries } from './country-operations';

import { pending, rejected } from 'shared/functions/redux';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: builder => {
    builder
      // ALL
      .addCase(fetchCountries.pending, pending)
      .addCase(fetchCountries.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchCountries.rejected, rejected)
      // FAVORITE
      .addCase(fetchFavoruteCountries.pending, pending)
      .addCase(fetchFavoruteCountries.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchFavoruteCountries.rejected, rejected);
  },
});

export default countriesSlice.reducer;
