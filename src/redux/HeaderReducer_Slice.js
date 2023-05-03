import { createSlice } from "@reduxjs/toolkit";

export const HeaderReducer_Slice = createSlice({
  name: "Header",
  initialState: {
    page: "",
  },
  reducers: {
    updateHeader: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { updateHeader } = HeaderReducer_Slice.actions;

export default HeaderReducer_Slice;
