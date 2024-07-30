import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  time: 0,
  running: false,
  countdown: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setTime(state, action) {
      state.time = action.payload;
    },
    startTimer(state) {
      state.running = true;
    },
    stopTimer(state) {
      state.running = false;
    },
    resetTimer(state) {
      state.time = 0;
      state.running = false;
      state.countdown = false;
    },
    tick(state) {
      if (state.running) {
        if (state.countdown) {
          state.time = state.time > 0 ? state.time - 1 : 0;
          if (state.time === 0) state.running = false; // Ferma il timer quando arriva a zero
        } else {
          state.time += 1;
        }
      }
    },
    startCountdown(state, action) {
      state.time = action.payload;
      state.running = true;
      state.countdown = true;
    },
  },
});

export const { setTime, startTimer, stopTimer, resetTimer, tick, startCountdown } = timerSlice.actions;
export default timerSlice.reducer;
