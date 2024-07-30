// store/navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  redirectTo: null,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setRedirect(state, action) {
      state.redirectTo = action.payload;
    },
    clearRedirect(state) {
      state.redirectTo = null;
    },
  },
});

export const { setRedirect, clearRedirect } = navigationSlice.actions;
export default navigationSlice.reducer;
