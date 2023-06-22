import { createSlice } from "@reduxjs/toolkit";

export const InstituicoesStateReducer_Slice = createSlice({
  name: "Instituicoes",
  initialState: {
    instituicoes: [],
    instituicao: [],
  },
  reducers: {
    setInstituicoes: (state, action) => {
      state.instituicoes = action.payload;
    },
    setInstituicao: (state, action) => {
      state.instituicao = action.payload;
    },
  },
});

export const { setInstituicoes, setInstituicao } =
  InstituicoesStateReducer_Slice.actions;

export default InstituicoesStateReducer_Slice;
