import { configureStore } from '@reduxjs/toolkit';
import { defaultMiddleware } from './middlewares';
import {
  formReducer,
  userReducer,
  menuReducer,
  messagesReducer,
} from './slices';

const store = configureStore({
  reducer: {
    user: userReducer,
    form: formReducer,
    menu: menuReducer,
    messages: messagesReducer,
  },
  middleware: defaultMiddleware,
});

export { store };
