import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
export const getServices = createAsyncThunk(
  'services/getServices',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/services');
      return res.data.services;
    } catch (error) {
      toast(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
