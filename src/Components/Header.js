import { HeaderNav } from "../styles/Components/S_Header";
import ProfilePic from "../Assets/Img/Profile.png";

import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Header() {
  const isAuthenticated = useSelector((state) => state.Login.isAuthenticated);
  const LoginRole = useSelector((state) => state.Login.loginRole);

  const [HeaderState, setHeaderState] = useState("");

  const location = useLocation().pathname.split("/")[1].toLowerCase();

  useEffect(() => {
    switch (location) {
      case "":
        LoginRole === 1
          ? setHeaderState("Temporada")
          : setHeaderState("Avisos");
        break;
      case "temporada":
        setHeaderState("Temporada");
        break;
      case "dispositivos":
        setHeaderState("Dispositivos");
        break;
      case "leaderboard":
        setHeaderState("Leaderboard");
        break;
      case "sugestoes":
        setHeaderState("Sugestões");
        break;
      case "trabalhadores":
        setHeaderState("Trabalhadores");
        break;
      default:
        setHeaderState("");
    }
  }, [location, LoginRole]);

  const Header = (
    <HeaderNav>
      <h5>{HeaderState}</h5>
      <span>
        <img src={ProfilePic} alt="fotografia_de_utilizador" />
      </span>
    </HeaderNav>
  );

  return isAuthenticated ? Header : null;
}

export default Header;
