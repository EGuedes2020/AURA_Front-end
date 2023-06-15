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

import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.Login.isAuthenticated);
  const LoginRole = useSelector((state) => state.Login.loginRole);

  const [HeaderState, setHeaderState] = useState("");
  const [BackBtn, setBackBtn] = useState(false);
  const [CrossBtn, setCrossBtn] = useState(false);

  const location = useLocation().pathname.split("/")[1].toLowerCase();

  useEffect(() => {
    setCrossBtn(false);
    setBackBtn(false);
    dispatch(setNavbarState(true));
    switch (location) {
      case "":
        LoginRole === 1
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
    }
  }, [location, LoginRole, dispatch]);

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

  return isAuthenticated ? Header : null;
}

export default Header;
