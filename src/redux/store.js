import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
        { id: 'id-1', name: 'Саньок Пиво', number: '459-12-56' },
        { id: 'id-2', name: 'Колян Лопата', number: '443-89-12' },
        { id: 'id-3', name: 'Толян Газель', number: '645-17-79' },
        { id: 'id-4', name: 'Приват Банк', number: '227-91-26' },
    ],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,

  reducers: {
    setContacts(state, action) {
      state.contacts.push(action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    deleteContact(state, action) {
      const deletedContact = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(deletedContact, 1);
    },
  },
});

const rootReducer = contactsSlice.reducer;

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export const { setContacts, setFilter, deleteContact } = contactsSlice.actions;
export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
