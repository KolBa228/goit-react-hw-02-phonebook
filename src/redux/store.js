import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)


export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.contacts.filter;
