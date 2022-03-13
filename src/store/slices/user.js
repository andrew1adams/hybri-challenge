import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { email: '', password: '' },
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchRequestUser: (state) => {
      state.isLoading = true;
    },
    fetchResponseUser: (state) => {
      state.isLoading = false;
    },
    userLogin: (state, { payload }) => {
      return { ...state, user: payload, isLogged: true };
    },
    userLogout: () => {
      return { user: initialState.user, isLogged: false };
    },
  },
});

export const { userLogin, userLogout, fetchRequestUser, fetchResponseUser } =
  userSlice.actions;

export const userState = (state) => state.user;

export default userSlice.reducer;
