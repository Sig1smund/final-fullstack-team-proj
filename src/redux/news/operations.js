import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNews = createAsyncThunk('news/getNews', async (_, thunkAPI) => {
  try {
    const res = await axios.get('api/news');
    return res.data.news;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
