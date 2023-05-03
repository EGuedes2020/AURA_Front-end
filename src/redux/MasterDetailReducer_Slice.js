import { createSlice } from "@reduxjs/toolkit";

export const MasterDetail = createSlice({
  name: "MasterDetail",
  initialState: {
    detailRole: "",
    detailId: "",
  },
  reducers: {
    setDetailRole: (state, action) => {
      state.detailRole = action.payload;
    },
    setDetailId: (state, action) => {
      state.detailId = action.payload;
    },
  },
});

export const { setDetailRole, setDetailId } = MasterDetail.actions;

export default MasterDetail;
