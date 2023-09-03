import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './slice';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
