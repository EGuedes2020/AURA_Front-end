import { Main } from "../../styles/Components/S_Main";
import { Btn } from "../../styles/elements/Button";

import { Link } from "react-router-dom";

import CardSugestoes from "../../Components/CardSugestoes";
import Plus_icon from "../../Assets/Icons/Plus_icon.svg";

function Sugestoes() {
  return (
    <Main>
      <CardSugestoes></CardSugestoes>
      <Link to="/Sugestao">
        <Btn variant="2">
          <img src={Plus_icon} alt="Plus_icon" /> Adicionar
        </Btn>
      </Link>
    </Main>
  );
}

export default Sugestoes;
