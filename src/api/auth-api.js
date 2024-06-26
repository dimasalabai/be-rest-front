import axios from 'axios';

const authInstance = axios.create({
  baseURL: 'https://be-rest.onrender.com',
});

const setToken = token => {
  if (token) {
    return (authInstance.defaults.headers.authorization = `Bearer ${token}`);
  }
  authInstance.defaults.headers.authorization = '';
};

export const signUpRequest = async body => {
  const { data } = await authInstance.post('users/register', body);
  setToken(data.token);
  return data;
};

export const loginRequest = async body => {
  const { data } = await authInstance.post('users/login', body);
  setToken(data.token);
  return data;
};

export const currentRequest = async token => {
  setToken(token);
  try {
    const { data } = await authInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export const logoutRequest = async () => {
  const { data } = await authInstance.post('/users/logout');
  return data;
};

export default authInstance;
