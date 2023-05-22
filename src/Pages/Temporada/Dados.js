import { Main } from "../../styles/Components/S_Main";

import ChartDadosContainer from "../../Components/ChartDadosContainer";
import MesDadosContainer from "../../Components/MesDadosContainer";

function Dados() {
  return (
    <Main>
      <ChartDadosContainer></ChartDadosContainer>
      <MesDadosContainer
        mes="Março"
        energia="1223.23"
        despesa="567.23"
      ></MesDadosContainer>
      <MesDadosContainer mes="Abril" energia="" despesa=""></MesDadosContainer>
      <MesDadosContainer mes="Maio" energia="" despesa=""></MesDadosContainer>
    </Main>
  );
}

export default Dados;
