import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth/auth-slice';
import countriesReduser from './countries/country-slice';
import favoritesReduser from './favorites/favorites-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReduser = persistReducer(persistConfig, authReducer);

const rootReduser = combineReducers({
  auth: persistedAuthReduser,
  countries: countriesReduser,
  favoriteCountries: favoritesReduser,
});

export default rootReduser;
