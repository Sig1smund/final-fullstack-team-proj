import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://team-project-pets-backend.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      console.log(credentials);
      const res = await axios.post('api/users/register', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/users/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('api/users/logout');
    clearAuthHeader();
  } catch (error) {
    toast(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const current = createAsyncThunk('auth/current', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get('api/users/current');
    return res.data;
  } catch (error) {
    // toast(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const res = await axios.get('api/users/refresh');
    // setAuthHeader(res.data.token);
    return res.data;
  } catch (error) {
    toast(error.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.patch('api/users/update', credentials);
      // setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createPet = createAsyncThunk(
  'pets/createPet',
  async (petData, thunkAPI) => {
    try {
      const res = await axios.post('api/pets', petData);
      // setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/removePet',
  async (petId, thunkAPI) => {
    try {
      const res = await axios.delete(`api/pets/${petId}`);
      return res.data;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFavNotice = createAsyncThunk(
  'auth/setFavNotice',
  async (noticeId, thunkAPI) => {
    console.log(noticeId);
    try {
      const res = await axios.patch(`api/notices/${noticeId}`);
      return res.data;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
