import { Main } from "../../styles/Components/S_Main";
import { Btn } from "../../styles/elements/Button";
import { TrabalhadorLinkContainer } from "../../styles/Components/S_TrabalhadorLinkContainer";

import { Link } from "react-router-dom";

import SearchBar from "../../Components/SearchBar";
import TrabalhadorLink from "../../Components/TrabalhadorLink";

import Plus_icon from "../../Assets/Icons/Plus_icon.svg";

function Trabalhadores() {
  return (
    <>
      <Link to="/ConvidarTrabalhador">
        <Btn variant="2">
          <img src={Plus_icon} alt="Plus_icon" /> Convidar
        </Btn>
      </Link>
      <Main>
        <SearchBar></SearchBar>
        <TrabalhadorLinkContainer>
          <TrabalhadorLink></TrabalhadorLink>
          <TrabalhadorLink></TrabalhadorLink>
        </TrabalhadorLinkContainer>
      </Main>
    </>
  );
}

export default Trabalhadores;
