import { createSlice } from '@reduxjs/toolkit';
import {
  getNotices,
  addNotice,
  getOwnNotices,
  getFavNotices,
  getNotice,
  setFavNotice,
  removeFavNotice,
} from './operations';

const initialState = {
  notices: [],
  isLoading: false,
  isDeleting: false,
  error: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNotices.fulfilled, (state, action) => {
        state.notices = action.payload.notices;
        state.isLoading = false;
      })
      .addCase(getNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(addNotice.fulfilled, (state, action) => {
        state.notices = [...state.notices, ...action.payload];
        state.isLoading = false;
      })
      .addCase(addNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOwnNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOwnNotices.fulfilled, (state, action) => {
        state.notices = [...action.payload.notices];
        state.isLoading = false;
      })
      .addCase(getOwnNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFavNotices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavNotices.fulfilled, (state, action) => {
        state.notices = [...action.payload.notices];
        state.isLoading = false;
      })
      .addCase(getFavNotices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNotice.fulfilled, (state, action) => {
        state.notices = action.payload.notices;
        state.isLoading = false;
      })
      .addCase(getNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(setFavNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(setFavNotice.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(setFavNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(removeFavNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeFavNotice.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(removeFavNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const noticesReducer = noticesSlice.reducer;
