import { createSlice } from "@reduxjs/toolkit";

export const ModalStateReducer_Slice = createSlice({
  name: "Modal",
  initialState: {
    modalState: true,
    vereditoState: "",
  },
  reducers: {
    setModalState: (state, action) => {
      state.modalState = action.payload;
    },
    setVereditoState: (state, action) => {
      state.vereditoState = action.payload;
    },
  },
});

export const { setModalState, setVereditoState } = ModalStateReducer_Slice.actions;

export default ModalStateReducer_Slice;
