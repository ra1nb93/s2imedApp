// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './timerSlice';
import navigationReducer from './navigationSlice';
import audioReducer from './audioSlice';

export const store = configureStore({
  reducer: {
    timer: timerReducer,
    navigation: navigationReducer,
    audio: audioReducer,

  },
});
