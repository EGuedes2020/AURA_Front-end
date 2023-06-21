import { HeaderNav } from "../styles/Components/S_Header";
import ProfilePic from "../Assets/Img/Profile.png";

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
  setInstitution,
  setRole,
  setWorker_id,
} from "../redux/LoginStateReducer_Slice";

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

  useEffect(() => {
    dispatch(setWorker_id(getCookie("worker_id")));

    if (isAuthenticated) {
      fetch(`https://aura-app.onrender.com/api/workers/${WorkerId}`).then(
        (res) => {
          dispatch(setRole(res.data.worker.role));
          console.log(res.data.worker.role);
        }
      );
    }

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

  const Header = (
    <HeaderNav variant={BackBtn ? "back" : CrossBtn ? "back" : ""}>
      {BackBtn ? Back : null}
      {CrossBtn ? Cross : null}
      <H5>{HeaderState}</H5>
      <span>
        {location === "sugestao" ? (
          <TrashIcon />
        ) : location === "trabalhador" ? (
          <TrashIcon />
        ) : location === "definicoes" ? null : location ===
          "gestaodispositivos" ? null : (
          <Link to="/Definicoes">
            <img src={ProfilePic} alt="fotografia_de_utilizador" />
          </Link>
        )}
      </span>
    </HeaderNav>
  );

  return HeaderState === "" ? null : isAuthenticated ? Header : null;
}

export default Header;
