import { createSlice } from "@reduxjs/toolkit";

export const LoginStateReducer_Slice = createSlice({
  name: "LoginState",
  initialState: {
    isAuthenticated: false,
    Token: false,
    Institution_id: false,
    Role: false,
    WorkerId: false,
  },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setToken: (state, action) => {
      state.Token = action.payload;
    },
    setInstitution: (state, action) => {
      state.Institution_id = action.payload;
    },
    setRole: (state, action) => {
      state.Role = action.payload;
    },
    setWorker_id: (state, action) => {
      state.WorkerId = action.payload;
    },
  },
});

export const {
  setIsAuthenticated,
  setToken,
  setInstitution,
  setRole,
  setWorker_id,
} = LoginStateReducer_Slice.actions;

export default LoginStateReducer_Slice;
