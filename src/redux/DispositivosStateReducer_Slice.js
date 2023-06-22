import { createSlice } from "@reduxjs/toolkit";

export const DispositivosStateReducer_Slice = createSlice({
  name: "Dispositivos",
  initialState: {
    divisoesNumero: 0,
    dispositivos:[],
    dispositivosNumero:0 ,
  },
  reducers: {
    setDivisoesNumero: (state, action) => {
      state.divisoesNumero = action.payload;
    },
    setDispositivos: (state, action) => {
      state.dispositivos = action.payload;
    },
    setDispositivosNumero: (state, action) => {
      state.dispositivosNumero = action.payload;
    },
  },
});

export const { setDivisoesNumero, setDispositivos, setDispositivosNumero } = DispositivosStateReducer_Slice.actions;

export default DispositivosStateReducer_Slice;
