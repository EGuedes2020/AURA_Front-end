import { createSlice } from "@reduxjs/toolkit";

export const LoginStateReducer_Slice = createSlice({
  name: "LoginState",
  initialState: {
    loginRole: 1,
    isAuthenticated: true,
  },
  reducers: {
    setLoginRole: (state, action) => {
      state.loginRole = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setLoginRole, setIsAuthenticated } =
  LoginStateReducer_Slice.actions;

export default LoginStateReducer_Slice;
