import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './operations';

const initialState = {
  news: [],
  filter: '',
  isLoading: false,
  isDeleting: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    input(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getNews.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});
export const { input } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
