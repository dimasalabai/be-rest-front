import authInstance from './auth-api';

export const sendUserNeedHelp = async data => {
  try {
    const response = await authInstance.patch('/email/need-help', data);
    return response;
  } catch (error) {
    console.error('Failed to send a help request', error);
    throw error;
  }
};
