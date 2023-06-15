import { Main } from "../styles/Components/S_Main";
import { DoubleDefinicoesBTN } from "../styles/Components/S_DoubleDefinicoesBTN";
import { BtnDefinicoes } from "../styles/elements/ButtonDefinicoes";
import { H6 } from "../styles/elements/H6";

import { Link } from "react-router-dom";

import UserProfileInfo from "../Components/UserProfileInfo";

import EditIcon from "../Assets/Icons/Edit_icon";
import LogOutIcon from "../Assets/Icons/LogOut_icon";
import PlugIcon from "../Assets/Icons/Plug_icon";
import CardIcon from "../Assets/Icons/Card_icon";
import HelpIcon from "../Assets/Icons/Help_icon";

function Definicoes() {
  return (
    <Main>
      <UserProfileInfo></UserProfileInfo>
      <DoubleDefinicoesBTN btn="2">
        <BtnDefinicoes bgcolor="1">
          <EditIcon /> Editar Perfil
        </BtnDefinicoes>
        <BtnDefinicoes bgcolor="2">
          <LogOutIcon /> Terminar Sessão
        </BtnDefinicoes>
      </DoubleDefinicoesBTN>
      <H6> Instituição </H6>
      <Link to="/GestaoDispositivos">
        <BtnDefinicoes bgcolor="4">
          <PlugIcon /> Gestão de Dispositivos
        </BtnDefinicoes>
      </Link>
      <BtnDefinicoes bgcolor="4">
        <CardIcon /> Compras e Subscrições
      </BtnDefinicoes>
      <BtnDefinicoes bgcolor="3" marginTop={true}>
        <HelpIcon /> Ajuda e Tutoriais
      </BtnDefinicoes>
    </Main>
  );
}

export default Definicoes;
