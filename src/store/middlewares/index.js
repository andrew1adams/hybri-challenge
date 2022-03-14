import { getDefaultMiddleware } from '@reduxjs/toolkit';

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export { defaultMiddleware };
