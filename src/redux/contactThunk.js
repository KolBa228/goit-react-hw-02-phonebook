import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../servises/fetchData';


export const getContactThunk = createAsyncThunk(
  'contacts/allContacts',
  async (_, { reject, getState }) => {
    const state = getState();
    const token = state.auth.token
    try {
      const data = fetchContacts(token);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async ({contact}, { reject, getState }) => {
    const state = getState();
    const token = state.auth.token
    try {
      const data = addContact({contact, token});
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const delContactThunk = createAsyncThunk(
  'contacts/delContact',
  async ({ id }, { reject, getState }) => {
        const state = getState();
    const token = state.auth.token
    try {
      const data = deleteContact({id, token});
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);