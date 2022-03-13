import { configureStore } from '@reduxjs/toolkit';
import { formReducer, userReducer } from './slices';

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
  },
});

export { store };
