import { createSlice } from "@reduxjs/toolkit";

export const AvisosAtivosStateReducer_Slice = createSlice({
  name: "AvisosAtivos",
  initialState: {
    avisosAtivos: [],
    totalAvisosAtivos: 0,
  },
  reducers: {
    setAvisosAtivos: (state, action) => {
      state.avisosAtivos = action.payload;
    },
    setTotalAvisosAtivos: (state, action) => {
      state.totalAvisosAtivos = action.payload;
    },
  },
});

export const { setAvisosAtivos, setTotalAvisosAtivos } =
  AvisosAtivosStateReducer_Slice.actions;

export default AvisosAtivosStateReducer_Slice;
