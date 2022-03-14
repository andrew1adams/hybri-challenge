import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [],
  isLoading: false,
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    handleFetchMessage: (state) => {
      state.isLoading = !state.isLoading;
    },
    getMessages: (state, { payload }) => {
      state.messages = payload;
    },
  },
});

export const { handleFetchMessage, getMessages } = messagesSlice.actions;

export const messagesState = (state) => state.messages;

export default messagesSlice.reducer;
