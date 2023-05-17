import { Main } from "../../styles/Components/S_Main";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../../styles/elements/CardDefault";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";

import ChartDadosContainer from "../../Components/ChartDadosContainer";

function Dados() {
  return (
    <Main>
      <ChartDadosContainer></ChartDadosContainer>
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            energia
          </Overline>
          <OverlineDefaultData>
            1223.23 <Overline variant="Default"> kWh </Overline>
          </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            despesa
          </Overline>
          <OverlineDefaultData>
            567.23 <Overline variant="Default"> € </Overline>
          </OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
    </Main>
  );
}

export default Dados;
