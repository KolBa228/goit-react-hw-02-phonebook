import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  delContactThunk,
  getContactThunk,
} from './contactThunk';

const contactsInitialState = {
  contacts: []
};

const handlePending = state => {
  state.isLoading = true
};

const handleRejeted = (state, { payload }) => {
  state.error = payload
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: {
    [getContactThunk.pending]: handlePending,
    [getContactThunk.rejected]: handleRejeted,
    [getContactThunk.fulfilled]: (state, { payload }) => {
      state.contacts = payload
    },
    [addContactThunk.rejected]: handleRejeted,
    [addContactThunk.pending]: handlePending,
    [addContactThunk.fulfilled]: (state, { payload }) => {
      state.contacts = [payload, ...state.contacts]
    },
    [delContactThunk.pending]: handlePending,
    [delContactThunk.rejected]: handleRejeted,
    [delContactThunk.fulfilled]: (state, { payload }) => {
      state.contacts = state.contacts.filter(item => item.id !== payload.id);
    }
  }
});

export default contactsSlice.reducer;