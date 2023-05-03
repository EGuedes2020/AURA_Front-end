import { createSlice } from "@reduxjs/toolkit";

export const API_Dados_Reducer_Slice = createSlice({
  name: "API",
  initialState: {
    utentes: [],
    cuidadores: [],
    ocorrencias: [],
    pedidos_ajuda: [],
    dicas_energia: [],
    consumo_energia: [],
  },
  reducers: {
    updateUtentes: (state, action) => {
      state.utentes = action.payload;
    },
    updateCuidadores: (state, action) => {
      state.cuidadores = action.payload;
    },
    updateOcorrencias: (state, action) => {
      state.ocorrencias = action.payload;
    },
    updatePedidosAjuda: (state, action) => {
      state.pedidos_ajuda = action.payload;
    },
    updateDicasEnergia: (state, action) => {
      state.dicas_energia = action.payload;
    },
    updateConsumoEnergia: (state, action) => {
      state.consumo_energia = action.payload;
    },
  },
});

export const {
  updateUtentes,
  updateCuidadores,
  updateOcorrencias,
  updatePedidosAjuda,
  updateDicasEnergia,
  updateConsumoEnergia,
} = API_Dados_Reducer_Slice.actions;

export default API_Dados_Reducer_Slice;
