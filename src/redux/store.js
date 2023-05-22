import { configureStore } from "@reduxjs/toolkit";
import { NavbarStateReducer_Slice } from "./NavbarStateReducer_Slice";
//import { API_Dados_Reducer_Slice } from "./API_DadosReducer_Slice";
import { LoginStateReducer_Slice } from "./LoginStateReducer_Slice";
//import MasterDetail from "./MasterDetailReducer_Slice";
import { ModalStateReducer_Slice } from "./ModalStateReducer_Slice";

export default configureStore({
  reducer: {
    Navbar: NavbarStateReducer_Slice.reducer,
    //API: API_Dados_Reducer_Slice.reducer,
    Login: LoginStateReducer_Slice.reducer,
    //Detail: MasterDetail.reducer,
    Modal: ModalStateReducer_Slice.reducer,
  },
});
