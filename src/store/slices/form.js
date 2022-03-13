import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: 'login',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeToRegister: (state) => {
      state.form = 'register';
    },
    changeToLogin: (state) => {
      state.form = 'login';
    },
  },
});

export const { changeToRegister, changeToLogin } = formSlice.actions;

export const formState = (state) => state.form;

export default formSlice.reducer;
