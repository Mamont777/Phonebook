import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  'auth/signup',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      toast.success('Successfully registered!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setAuthHeader(data.token);
      toast.success('Successfully logged!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      toast.success('Successfully logout!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      // After a successful logout, remove the token from the HTTP header
      clearAuthHeader();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
