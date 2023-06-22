import { createSlice } from "@reduxjs/toolkit";

export const ConquistasStateReducer_Slice = createSlice({
  name: "Conquistas",
  initialState: {
    badges: [],
    mainBadges: [],
  },
  reducers: {
    setBadges: (state, action) => {
      state.badges = action.payload;
    },
    setMainBadges: (state, action) => {
      state.mainBadges = action.payload;
    },
  },
});

export const { setBadges, setMainBadges } =
  ConquistasStateReducer_Slice.actions;

export default ConquistasStateReducer_Slice;
