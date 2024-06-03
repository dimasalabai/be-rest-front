import authInstance from './auth-api';

export const addFavoriteRequest = async countryId => {
  const { data } = await authInstance.post('/users/addFavorite', {
    id: countryId,
  });
  return data.favoriteCountries;
};

export const deleteFavoriteRequest = async countryId => {
  const { data } = await authInstance.post('/users/deleteFavorite', {
    id: countryId,
  });
  return data.favoriteCountries; // Повертаємо лише масив `favoriteCountries`
};
