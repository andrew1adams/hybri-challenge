import { configureStore } from '@reduxjs/toolkit';
import { formReducer, userReducer, menuReducer } from './slices';

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
    menu: menuReducer,
  },
});

export { store };
