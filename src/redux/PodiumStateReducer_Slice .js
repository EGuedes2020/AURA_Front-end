import { createSlice } from "@reduxjs/toolkit";

export const PodiumStateReducer_Slice = createSlice({
  name: "Podium",
  initialState: {
    firstPlace: [],
    secondPlace: [],
    thirdPlace: [],
  },
  reducers: {
    setFirstPlace: (state, action) => {
      state.firstPlace = action.payload;
    },
    setSecondPlace: (state, action) => {
      state.secondPlace = action.payload;
    },
    setThirdPlace: (state, action) => {
      state.thirdPlace = action.payload;
    },
  },
});

export const { setFirstPlace, setSecondPlace, setThirdPlace } =
  PodiumStateReducer_Slice.actions;

export default PodiumStateReducer_Slice;
