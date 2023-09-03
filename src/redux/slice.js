import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

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

export const { setContacts, setFilter, deleteContact } = contactsSlice.actions;
export const rootReducer = contactsSlice.reducer;