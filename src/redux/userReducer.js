import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  isAuthenticated: false,
  error: "",
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUserRequest: (state) => {
      state.loading = true;
    },
    loadUserSuccess: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = "";
    },
    loadUserFailed: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export default userReducer.reducer;
export const { loadUserSuccess, loadUserFailed, loadUserRequest } =
  userReducer.actions;
