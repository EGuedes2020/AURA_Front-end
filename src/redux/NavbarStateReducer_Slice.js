import { createSlice } from "@reduxjs/toolkit";

export const NavbarStateReducer_Slice = createSlice({
  name: "Navbar",
  initialState: {
    navbarState: true,
  },
  reducers: {
    setNavbarState: (state, action) => {
      state.navbarState = action.payload;
    },
  },
});

export const { setNavbarState } = NavbarStateReducer_Slice.actions;

export default NavbarStateReducer_Slice;
