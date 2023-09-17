import axios from 'axios';
export const API_BASE_URL = 'https://connections-api.herokuapp.com';

export const contactAPI = axios.create({
    baseURL: API_BASE_URL
});

const attachHeader = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const fetchContacts = async token => {
    const config = attachHeader(token)
    try {
        const response = await contactAPI.get('/contacts', config)
        return response.data
    } catch (error) {
        throw error;
    }
};

export const addContact = async ({ token, contact }) => {
    const config = attachHeader(token);
    try {
        const response = await contactAPI.post('/contacts', config, contact)
        return response.data
    } catch (error) {
        throw error
    }
};

export const deleteContact = async ({ token, id }) => {
    const config = attachHeader(token);
    try {
        const response = await contactAPI.delete(`/contacts/${id}`, config)
        return response.data;
    } catch (error) {
        throw error
    }
};


