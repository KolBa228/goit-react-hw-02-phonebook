import { contactAPI } from './fetchData';

export const login = async ({ email, password }) => {
  try {
    const body = {
      email,
      password,
    };
    const response = await contactAPI.post('/users/login', body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await contactAPI.post('/users/logout', null, config);
    return 'succeed';
  } catch (error) {
    throw error;
  }
};

export const register = async userData => {
  try {
    const response = await contactAPI.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

