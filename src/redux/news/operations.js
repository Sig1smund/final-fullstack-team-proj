import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getNews = createAsyncThunk('news/getNews', async (_, thunkAPI) => {
  try {
    const res = await axios.get('api/news');
    return res.data.news;
  } catch (error) {
    toast(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});
