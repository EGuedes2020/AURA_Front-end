import { createSlice } from "@reduxjs/toolkit";

export const ImgHeightStateReducer_Slice = createSlice({
  name: "ImgHeight",
  initialState: {
    imgHeight: 0,
  },
  reducers: {
    setImgHeight: (state, action) => {
      state.imgHeight = action.payload;
    },
  },
});

export const { setImgHeight } =
ImgHeightStateReducer_Slice.actions;

export default ImgHeightStateReducer_Slice;
