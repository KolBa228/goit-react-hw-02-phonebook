import { combineReducers } from 'redux';
import contactsReducer from './contactsSlice';
import filterReducer from './filterSlice';
import authReducer from './authSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER]
    }
  })
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'name']
};

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistReducer(authPersistConfig, authReducer)
});

export const store = configureStore({
  reducer: rootReduser,
  middleware
});

export const persistor = persistStore(store)