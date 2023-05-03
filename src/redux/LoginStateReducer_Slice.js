import { createSlice } from "@reduxjs/toolkit";

export const LoginStateReducer_Slice = createSlice({
  name: "LoginState",
  initialState: {
    loginState: "",
    loginURL: "",
  },
  reducers: {
    setLogin: (state, action) => {
      state.loginState = action.payload;
    },
    setLoginURL: (state, action) => {
      state.loginURL = action.payload;
    },
  },
});

export const { setLogin, setLoginURL } = LoginStateReducer_Slice.actions;

export default LoginStateReducer_Slice;
