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

import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  setToken,
  setIsAuthenticated,
  setInstitution,
  setRole,
  setWorker_id,
  setName,
  setEmail,
  setProfilePic,
  setUserData,
} from "../redux/LoginStateReducer_Slice";

function Definicoes() {
  const dispatch = useDispatch();
  const [LogOutState, setLogOutState] = useState(false);

  function getCookie(cookieName) {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(cookieName + "=")) {
        return cookie.substring(cookieName.length + 1);
      }
    }
    //return "";
  }

  function LogOut() {
    document.cookie = "Token =; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie =
      "institution_id =; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "worker_id =; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = "role =; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    dispatch(setToken(false));
    dispatch(setInstitution(false));
    dispatch(setRole(false));
    dispatch(setWorker_id(false));
    dispatch(setUserData(false));

    dispatch(setName(""));
    dispatch(setEmail(""));
    dispatch(setProfilePic(""));
    setLogOutState(true);
  }

  useEffect(() => {
    if (getCookie("Token")) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }
  }, [LogOutState, dispatch]);

  const Name = useSelector((state) => state.Login.Name);
  const Email = useSelector((state) => state.Login.Email);
  const Img = useSelector((state) => state.Login.ProfilePic);

  return (
    <Main>
      <UserProfileInfo img={Img} name={Name} email={Email}></UserProfileInfo>
      <DoubleDefinicoesBTN btn="2">
        <BtnDefinicoes bgcolor="1">
          <EditIcon /> Editar Perfil
        </BtnDefinicoes>
        <BtnDefinicoes bgcolor="2" onClick={() => LogOut()}>
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
