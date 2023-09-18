import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from '../servises/fetchData';

export const getContactThunk = createAsyncThunk(
  'contacts/allContacts',
  async (token, { reject }) => {
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
  async (contact, { reject }) => {
    try {
      const data = addContact(contact);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const delContactThunk = createAsyncThunk(
  'contacts/delContact',
  async (id, { reject }) => {
    try {
      const data = deleteContact(id);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);