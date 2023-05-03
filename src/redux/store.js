import { configureStore } from "@reduxjs/toolkit";
import { HeaderReducer_Slice } from "./HeaderReducer_Slice";
import { API_Dados_Reducer_Slice } from "./API_DadosReducer_Slice";
import { LoginStateReducer_Slice } from "./LoginStateReducer_Slice";
import MasterDetail from "./MasterDetailReducer_Slice";

export default configureStore({
  reducer: {
    Header: HeaderReducer_Slice.reducer,
    API: API_Dados_Reducer_Slice.reducer,
    Login: LoginStateReducer_Slice.reducer,
    Detail: MasterDetail.reducer,
  },
});
