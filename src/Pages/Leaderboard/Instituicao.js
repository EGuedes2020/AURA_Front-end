import { Main } from "../../styles/Components/S_Main";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../../styles/elements/CardDefault";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { BadgesSectionContainerStyles } from "../../styles/Components/BadgesSectionContainerStyles";
import { BadgesSectionStyles } from "../../styles/Components/BadgesSectionStyles";

import InstitutionProfileInfo from "../../Components/InstitutionProfileInfo";

import Avisos25 from "../../Assets/Badges/Avisos_25.svg";

function Instituicao() {
  return (
    <Main>
      <InstitutionProfileInfo
        name="Ponte de Vagos"
        score="3400"
      ></InstitutionProfileInfo>
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
      <BadgesSectionContainerStyles>
        <Overline textTranform="Default" variant="badges">
          Conquistas
        </Overline>
        <BadgesSectionStyles variant="instituicao">
          <img src={Avisos25} alt="Badge_Aviso_25" />
          <img src={Avisos25} alt="Badge_Aviso_25" />
          <img src={Avisos25} alt="Badge_Aviso_25" />
          <img src={Avisos25} alt="Badge_Aviso_25" />
        </BadgesSectionStyles>
      </BadgesSectionContainerStyles>
    </Main>
  );
}

export default Instituicao;
