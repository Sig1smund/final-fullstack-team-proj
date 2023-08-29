import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  current,
  refresh,
  updateUser,
  createPet,
  deletePet,
  setFavNotice,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  userPets: [],
  favorite: [],
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isRegistered: false,
  isDeleting: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeIsRegistered(state, action) {
      state.isRegistered = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        // state.userPets = action.payload.pets;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logOut.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(current.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userPets = action.payload.pets;
        state.favorite = action.payload.user.favorite;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(current.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(refresh.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(createPet.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(createPet.fulfilled, (state, action) => {
        state.userPets = [...state.userPets, action.payload.pets];
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(createPet.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(deletePet.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        state.userPets = state.userPets.filter(
          p => p._id !== action.payload.id
        );
        state.isDeleting = false;
      })
      .addCase(deletePet.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      })
      .addCase(setFavNotice.pending, state => {
        state.isLoading = true;
      })
      .addCase(setFavNotice.fulfilled, (state, action) => {
        state.favorite = action.payload.user.favorite;
        state.isLoading = false;
      })
      .addCase(setFavNotice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { changeIsRegistered } = authSlice.actions;
