import { createSlice } from "@reduxjs/toolkit";

export const TrabalhadoresStateReducer_Slice = createSlice({
  name: "Trabalhadores",
  initialState: {
    trabalhadores: [],
    pesquisaTrabalhadores: "",
    trabalhador: [],
  },
  reducers: {
    setTrabalhadores: (state, action) => {
      state.trabalhadores = action.payload;
    },
    setPesquisaTrabalhadores: (state, action) => {
      state.pesquisaTrabalhadores = action.payload;
    },
    setTrabalhador: (state, action) => {
      state.trabalhador = action.payload;
    },
  },
});

export const { setTrabalhadores, setPesquisaTrabalhadores, setTrabalhador } =
  TrabalhadoresStateReducer_Slice.actions;

export default TrabalhadoresStateReducer_Slice;
