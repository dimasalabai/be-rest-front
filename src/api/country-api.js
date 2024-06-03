import authInstance from './auth-api';

export const getAllCountriesRequest = async () => {
  const { data } = await authInstance.get('/countries');
  return data;
};

export const getFavoriteCountries = async () => {
  const { data } = await authInstance.get('/users/favorite');
  console.log(data);
  return data;
};
