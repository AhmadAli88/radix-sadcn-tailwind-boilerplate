import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      // Handle your API response structure
      state.user = action.payload;
      state.token = action.payload.data.access_token;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      // Also clear localStorage
      localStorage.removeItem("dummy_user");
    }
  }
});

export const { updateUser, clearUser } = authSlice.actions;
export default authSlice.reducer;