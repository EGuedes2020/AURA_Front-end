import { HeaderNav } from "../styles/Components/S_Header";

import { H5 } from "../styles/elements/H5";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import BackIcon from "../Assets/Icons/Back_icon";
import CrossIcon from "../Assets/Icons/Cross_icon";

import TrashIcon from "../Assets/Icons/Trash_icon";

import { setNavbarState } from "../redux/NavbarStateReducer_Slice";
import { setIsAuthenticated } from "../redux/LoginStateReducer_Slice";

import { Link } from "react-router-dom";

import axios from "axios";

import {
  setRole,
  setWorker_id,
  setName,
  setEmail,
  setProfilePic,
  setUserData,
  setInstitution,
} from "../redux/LoginStateReducer_Slice";

import { setPesquisaTrabalhadores } from "../redux/TrabalhadoresStateReducer_Slice";

function Header() {
  const dispatch = useDispatch();

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

  const isAuthenticated = useSelector((state) => state.Login.isAuthenticated);
  const Token = useSelector((state) => state.Login.Token);
  const Role = useSelector((state) => state.Login.Role);

  useEffect(() => {
    if (getCookie("Token")) {
      dispatch(setIsAuthenticated(true));
    } else {
      dispatch(setIsAuthenticated(false));
    }
  }, [Token, dispatch]);

  const [HeaderState, setHeaderState] = useState("");
  const [BackBtn, setBackBtn] = useState(false);
  const [CrossBtn, setCrossBtn] = useState(false);

  const location = useLocation().pathname.split("/")[1].toLowerCase();

  const WorkerId = useSelector((state) => state.Login.WorkerId);

  const fetch = async (url) => {
    return await axios.get(url);
  };

  const UserData = useSelector((state) => state.Login.UserData);

  useEffect(() => {
    dispatch(setWorker_id(getCookie("worker_id")));
    dispatch(setInstitution(getCookie("institution_id")));

    if (isAuthenticated) {
      /* if (!UserData) { */
      fetch(`https://aura-app.onrender.com/api/workers/${WorkerId}`).then(
        (res) => {
          dispatch(setRole(res.data.worker.role));
          console.log(res.data.worker.role);
        }
      );
      /* } */

      if (!UserData) {
        fetch(`https://aura-app.onrender.com/api/workers/${WorkerId}`).then(
          (res) => {
            dispatch(setName(res.data.worker.name));
            dispatch(setEmail(res.data.worker.email));
            dispatch(setProfilePic(res.data.worker.avatar));
            console.log("fetch name email and profile pic");
            dispatch(setInstitution(getCookie("institution_id")));
          }
        );
      }
      dispatch(setUserData(true));
    }
  }, [location, dispatch]);

  const Img = useSelector((state) => state.Login.ProfilePic);

  useEffect(() => {
    setCrossBtn(false);
    setBackBtn(false);
    dispatch(setNavbarState(true));
    switch (location) {
      case "":
        Role === "admin"
          ? setHeaderState("Temporada")
          : setHeaderState("Avisos");
        break;
      case "temporada":
        setHeaderState("Temporada");
        break;
      case "dados":
        setHeaderState("Dados");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "preencherdadosmes":
        setHeaderState("Preencher dados");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "conquistas":
        setHeaderState("Conquistas");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "dispositivos":
        setHeaderState("Dispositivos");
        break;
      case "avisosativos":
        setHeaderState("Avisos Ativos");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "leaderboard":
        setHeaderState("Leaderboard");
        break;
      case "instituicao":
        setHeaderState("Instituiçao");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "sugestoes":
        setHeaderState("Sugestões");
        break;
      case "sugestao":
        setHeaderState("Sugestão");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "criarsugestao":
        setHeaderState("Criar Sugestão");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "trabalhadores":
        setHeaderState("Trabalhadores");
        dispatch(setPesquisaTrabalhadores(""));
        break;
      case "trabalhador":
        setHeaderState("Trabalhador");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "convidartrabalhador":
        setHeaderState("Convidar Trabalhador");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "definicoes":
        setHeaderState("Definições");
        setCrossBtn(true);
        dispatch(setNavbarState(false));
        break;
      case "gestaodispositivos":
        setHeaderState("Gestão de Dispositivos");
        setBackBtn(true);
        dispatch(setNavbarState(false));
        break;
      default:
        setHeaderState("");
        dispatch(setNavbarState(false));
    }
  }, [location, Role, dispatch]);

  const Back = (
    <span onClick={() => window.history.back()}>
      <BackIcon />
    </span>
  );

  const Cross = (
    <span onClick={() => window.history.back()}>
      <CrossIcon />
    </span>
  );

  const SugestaoData = useSelector((state) => state.Sugestoes.sugestao);

  const Apagar = () => {
    switch (location) {
      case "sugestao":
        try {
          const fetchData = async (url) => {
            return await axios.delete(url);
          };

          console.log("id=" + SugestaoData.id);

          fetchData(
            `https://aura-app.onrender.com/api/suggestions/${SugestaoData.id}`
          );
          window.history.back();
        } catch (error) {
          console.error(error);
        }

        break;
      default:
    }
  };

  const Delete = (
    <span onClick={() => Apagar()}>
      <TrashIcon />
    </span>
  );

  const Header = (
    <HeaderNav variant={BackBtn ? "back" : CrossBtn ? "back" : ""}>
      {BackBtn ? Back : null}
      {CrossBtn ? Cross : null}
      <H5>{HeaderState}</H5>
      <span>
        {location === "sugestao" ? (
          Delete
        ) : location === "trabalhador" ? (
          Delete
        ) : location === "definicoes" ? null : location ===
          "gestaodispositivos" ? null : (
          <Link to="/Definicoes">
            <img src={Img} alt="fotografia_de_utilizador" />
          </Link>
        )}
      </span>
    </HeaderNav>
  );

  return HeaderState === "" ? null : isAuthenticated ? Header : null;
}

export default Header;
