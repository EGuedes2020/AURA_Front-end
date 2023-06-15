import { Main } from "../../styles/Components/S_Main";
import { H6 } from "../../styles/elements/H6";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../../styles/elements/CardDefault";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";

import ChartTemporadaContainer from "../../Components/ChartTemporadaContainer";

function Temporada() {
  return (
    <Main>
      <H6 variant="Temporada" align="center">
        Temporada 1
      </H6>
      <ChartTemporadaContainer></ChartTemporadaContainer>
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Total Avisos
          </Overline>
          <OverlineDefaultData> 5219 </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Tempo de Resposta
          </Overline>
          <OverlineDefaultData>
            12.23
            <Overline variant="Default"> min</Overline>
          </OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
    </Main>
  );
}

export default Temporada;
