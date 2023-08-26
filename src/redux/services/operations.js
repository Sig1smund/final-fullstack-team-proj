import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getServices = createAsyncThunk(
  'services/getServices',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/services');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
