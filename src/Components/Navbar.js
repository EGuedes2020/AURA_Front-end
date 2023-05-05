import { Nav } from "../styles/Components/S_Navbar";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

import NavTemporadaIcon from "../Assets/Icons/Nav_Temporada_icon";
import NavDispositivosIcon from "../Assets/Icons/Nav_Dispositivos_icon";
import NavAvisosIcon from "../Assets/Icons/Nav_Avisos_icon";
import NavLeaderboardIcon from "../Assets/Icons/Nav_Leaderboard_icon";
import NavSugestoesIcon from "../Assets/Icons/Nav_Sugestoes_icon";
import NavTrabalhadoresIcon from "../Assets/Icons/Nav_Trabalhadores_icon";
import { useEffect } from "react";

function Navbar() {
  const LoginRole = useSelector((state) => state.Login.loginRole);

  const [NavState, setNavState] = useState("0");

  const location = useLocation().pathname;

  useEffect(() => {
    switch (location) {
      case "/":
        setNavState("1");
        break;
      case "/Temporada":
        setNavState("2");
        break;
      case "/Dispositivos":
        setNavState("2");
        break;
      case "/Leaderboard":
        LoginRole === 1 ? setNavState("3") : setNavState("4");
        break;
      case "/Sugestoes":
        LoginRole === 1 ? setNavState("4") : setNavState("3");
        break;
      case "/Trabalhadores":
        setNavState("5");
        break;
      default:
        setNavState("0");
    }
  }, [location, LoginRole]);

  const NavAdmin = (
    <>
      <Nav LoginRole={LoginRole} navselected={NavState}>
        <Link to="/" onClick={() => setNavState("1")}>
          <span>
            <NavTemporadaIcon />
          </span>
        </Link>
        <Link to="/Dispositivos" onClick={() => setNavState("2")}>
          <span>
            <NavDispositivosIcon />
          </span>
        </Link>
        <Link to="/Leaderboard" onClick={() => setNavState("3")}>
          <span>
            <NavLeaderboardIcon />
          </span>
        </Link>
        <Link to="/Sugestoes" onClick={() => setNavState("4")}>
          <span>
            <NavSugestoesIcon />
          </span>
        </Link>
        <Link to="/Trabalhadores" onClick={() => setNavState("5")}>
          <span>
            <NavTrabalhadoresIcon />
          </span>
        </Link>
        <div>
          <span></span>
        </div>
      </Nav>
    </>
  );

  const NavColaborador = (
    <>
      <Nav LoginRole={LoginRole} navselected={NavState}>
        <Link to="/" onClick={() => setNavState("1")}>
          <span>
            <NavAvisosIcon />
          </span>
        </Link>
        <Link to="/Temporada" onClick={() => setNavState("2")}>
          <span>
            <NavTemporadaIcon />
          </span>
        </Link>
        <Link to="/Sugestoes" onClick={() => setNavState("3")}>
          <span>
            <NavSugestoesIcon />
          </span>
        </Link>
        <Link to="/Leaderboard" onClick={() => setNavState("4")}>
          <span>
            <NavLeaderboardIcon />
          </span>
        </Link>
        <div>
          <span></span>
        </div>
      </Nav>
    </>
  );

  return LoginRole === 1 ? NavAdmin : NavColaborador;
}

export default Navbar;
