import { createSlice } from '@reduxjs/toolkit';

import { addFavorite, deleteFavorite } from './favorites-operations';

import { pending, rejected } from 'shared/functions/redux';

const initialState = {
  favoriteItems: [],
  isLoading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder
      // ADD
      .addCase(addFavorite.pending, pending)
      .addCase(addFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.favoriteItems = payload;
      })
      .addCase(addFavorite.rejected, rejected)
      // DELETE
      .addCase(deleteFavorite.pending, pending)
      .addCase(deleteFavorite.fulfilled, (state, { payload }) => {
        state.favoriteItems = payload;
        console.log(payload);
      })
      .addCase(deleteFavorite.rejected, rejected);
  },
});

export default favoritesSlice.reducer;
