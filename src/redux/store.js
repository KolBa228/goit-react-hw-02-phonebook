import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialState } from './state';
import { rootReducer } from './slice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistContactsReducer = persistReducer(
  persistConfig,
  rootReducer
)

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
  },
});

export const persistor = persistStore(store)


export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
