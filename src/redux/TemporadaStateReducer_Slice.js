import { createSlice } from "@reduxjs/toolkit";

export const TemporadaStateReducer_Slice = createSlice({
  name: "Temporada",
  initialState: {
    chartData: [],
  },
  reducers: {
    setChartData: (state, action) => {
      state.chartData = action.payload;
    },
  },
});

export const { setChartData } =
  TemporadaStateReducer_Slice.actions;

export default TemporadaStateReducer_Slice;
