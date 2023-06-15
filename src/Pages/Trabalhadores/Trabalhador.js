import { Main } from "../../styles/Components/S_Main";
import { CardDefault } from "../../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../../styles/elements/CardDefaultSub2";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";

import UserProfileInfo from "../../Components/UserProfileInfo";

function Trabalhador() {
  return (
    <Main>
      <UserProfileInfo></UserProfileInfo>
      <CardDefaultSub2 variant="1">
        <CardDefault variant="Sub">
          <Overline textTranform="Default" variant="Default">
            Nome completo
          </Overline>
          <OverlineDefaultData>David Santos da Cruz Silva</OverlineDefaultData>
        </CardDefault>
      </CardDefaultSub2>
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Número de telemóvel
          </Overline>
          <OverlineDefaultData> 911 000 111 </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            data de nascimento
          </Overline>
          <OverlineDefaultData>12/04/1990</OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
      <CardDefaultSub2 variant="1">
        <CardDefault variant="Sub">
          <Overline textTranform="Default" variant="Default">
            Morada
          </Overline>
          <OverlineDefaultData>
            Rua do Carmo, 1200-092 Lisboa, Portugal.
          </OverlineDefaultData>
        </CardDefault>
      </CardDefaultSub2>
    </Main>
  );
}

export default Trabalhador;
