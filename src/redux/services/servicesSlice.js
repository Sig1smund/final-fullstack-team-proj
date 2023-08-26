import { createSlice } from '@reduxjs/toolkit';
import { getServices } from './operations';

const initialState = {
  services: [],
  isLoading: false,
  isDeleting: false,
  error: null,
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getServices.pending, state => {
        state.isLoading = true;
      })
      .addCase(getServices.fulfilled, (state, action) => {
        state.services = [...action.payload];
        state.isLoading = false;
      })
      .addCase(getServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const servicesReducer = servicesSlice.reducer;
