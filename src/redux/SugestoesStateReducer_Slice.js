import { createSlice } from "@reduxjs/toolkit";

export const SugestoesStateReducer_Slice = createSlice({
  name: "Sugestoes",
  initialState: {
    sugestoesData: [],
    sugestao: [],
  },
  reducers: {
    setSugestoesData: (state, action) => {
      state.sugestoesData = action.payload;
    },
    setSugestao: (state, action) => {
      state.sugestao = action.payload;
    },
  },
});

export const { setSugestoesData, setSugestao } =
  SugestoesStateReducer_Slice.actions;

export default SugestoesStateReducer_Slice;
