import { createSlice } from "@reduxjs/toolkit";

export const LoginStateReducer_Slice = createSlice({
  name: "LoginState",
  initialState: {
    loginRole: 1,
  },
  reducers: {
    setLoginRole: (state, action) => {
      state.loginRole = action.payload;
    },
  },
});

export const { setLoginRole } = LoginStateReducer_Slice.actions;

export default LoginStateReducer_Slice;
