export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserPets = state => state.auth.userPets;

export const selectIsRegistered = state => state.auth.isRegistered;

export const selectIsDeleting = state => state.auth.isDeleting;

export const selecAllFavorites = state => state.auth.favorite;
