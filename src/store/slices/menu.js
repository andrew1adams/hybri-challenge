import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    handleBehaviorMenu: (state, { payload }) => {
      state.open = payload;
    },
  },
});

export const { handleBehaviorMenu } = menuSlice.actions;

export const menuState = (state) => state.menu;

export default menuSlice.reducer;
