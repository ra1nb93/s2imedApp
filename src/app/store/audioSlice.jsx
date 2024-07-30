// store/audioSlice.js

import { createSlice } from '@reduxjs/toolkit';

const audioSlice = createSlice({
  name: 'audio',
  initialState: {
    isPlaying: false,
  },
  reducers: {
    playAudio: (state) => {
      state.isPlaying = true;
    },
    pauseAudio: (state) => {
      state.isPlaying = false;
    },
    toggleAudio: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { playAudio, pauseAudio, toggleAudio } = audioSlice.actions;
export default audioSlice.reducer;
