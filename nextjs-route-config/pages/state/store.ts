import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './RandomApi/random-api-slice';

export const store = configureStore({
  reducer: {
    page: pageReducer,
  },
});

export type IRootState = ReturnType<typeof pageReducer>;