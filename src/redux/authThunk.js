import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, register } from '../servises/auth';
import { fetchUser } from 'servises/fetchData';


export const loginThunk = createAsyncThunk(
  'auth/login',
  async (userData, { reject }) => {
    try {
      const data = login(userData);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (token, { reject }) => {
    try {
      const data = logout(token);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/signup',
  async (userData, { reject }) => {
    try {
      const data = register(userData);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);

export const fetchUserThunk = createAsyncThunk(
  'auth/fetchUser',
  async (_, { reject, getState }) => {
    const state = getState();
    const token = state.auth.token
    try {
      const data = fetchUser(token);
      return data;
    } catch (error) {
      return reject(error.message);
    }
  }
);