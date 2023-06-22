import { configureStore } from "@reduxjs/toolkit";
import { NavbarStateReducer_Slice } from "./NavbarStateReducer_Slice";
import { LoginStateReducer_Slice } from "./LoginStateReducer_Slice";
import { ModalStateReducer_Slice } from "./ModalStateReducer_Slice";
import { AvisosAtivosStateReducer_Slice } from "./AvisosAtivosStateReducer_Slice";
import { TrabalhadoresStateReducer_Slice } from "./TrabalhadoresStateReducer_Slice";
import { TemporadaStateReducer_Slice } from "./TemporadaStateReducer_Slice";
import { ConquistasStateReducer_Slice } from "./ConquistasStateReducer_Slice";
import { InstituicoesStateReducer_Slice } from "./InstituicoesStateReducer_Slice";
import { ImgHeightStateReducer_Slice } from "./ImgHeightStateReducer_Slice";
import { PodiumStateReducer_Slice } from "./PodiumStateReducer_Slice ";
import { SugestoesStateReducer_Slice } from "./SugestoesStateReducer_Slice";
import { DispositivosStateReducer_Slice } from "./DispositivosStateReducer_Slice";

export default configureStore({
  reducer: {
    Navbar: NavbarStateReducer_Slice.reducer,
    Login: LoginStateReducer_Slice.reducer,
    Modal: ModalStateReducer_Slice.reducer,
    AvisosAtivos: AvisosAtivosStateReducer_Slice.reducer,
    Trabalhadores: TrabalhadoresStateReducer_Slice.reducer,
    Temporada: TemporadaStateReducer_Slice.reducer,
    Conquistas: ConquistasStateReducer_Slice.reducer,
    Instituicoes: InstituicoesStateReducer_Slice.reducer,
    ImgHeight: ImgHeightStateReducer_Slice.reducer,
    Podium: PodiumStateReducer_Slice.reducer,
    Sugestoes: SugestoesStateReducer_Slice.reducer,
    Dispositivos: DispositivosStateReducer_Slice.reducer,
  },
});
