import { Main } from "../../styles/Components/S_Main";
import { CardDefault } from "../../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../../styles/elements/CardDefaultSub2";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import {
  ListDispositivosContainer,
  ListDispositivos,
} from "../../styles/Components/ListDispositivos";

import RowListDispositivos from "../../Components/RowListDispositivos";

function AvisosAtivos() {
  return (
    <Main>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2>
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              Avisos Ativos
            </Overline>
            <OverlineDefaultData> 621 </OverlineDefaultData>
          </CardDefault>
        </CardDefaultSub2>
      </CardDefaultContainer>
      <ListDispositivosContainer>
        <ListDispositivos variant="Header">
          <span>Divisão</span>
          <span>Tempo Aviso</span>
          <span>Nº Ligados</span>
        </ListDispositivos>
        <RowListDispositivos
          detalhes="true"
          divisao="Cozinha"
          piso="1"
          dispositivos="34"
          total_avisos="2"
        ></RowListDispositivos>
        <RowListDispositivos
          detalhes="true"
          divisao="Cozinha"
          piso="1"
          dispositivos="34"
          total_avisos="2"
        ></RowListDispositivos>
        <RowListDispositivos
          detalhes="true"
          divisao="Cozinha"
          piso="1"
          dispositivos="34"
          total_avisos="2"
        ></RowListDispositivos>
      </ListDispositivosContainer>
    </Main>
  );
}

export default AvisosAtivos;
