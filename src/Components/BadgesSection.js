import { BadgesSectionContainerStyles } from "../styles/Components/BadgesSectionContainerStyles";
import { BadgesSectionStyles } from "../styles/Components/BadgesSectionStyles";
import { Overline } from "../styles/elements/Overline";

import Avisos25 from "../Assets/Badges/Avisos_25.svg";
import Avisos50 from "../Assets/Badges/Avisos_50.svg";
import Avisos100 from "../Assets/Badges/Avisos_100.svg";

import Tempo5 from "../Assets/Badges/Tempo_5.svg";
import Tempo10 from "../Assets/Badges/Tempo_10.svg";
import Tempo15 from "../Assets/Badges/Tempo_15.svg";

import Consumo1 from "../Assets/Badges/Consumo_1.svg";
import Consumo2 from "../Assets/Badges/Consumo_2.svg";
import Consumo3 from "../Assets/Badges/Consumo_3.svg";

import Sugestao1 from "../Assets/Badges/Sugestoes_1.svg";
import Sugestao3 from "../Assets/Badges/Sugestoes_3.svg";
import Sugestao5 from "../Assets/Badges/Sugestoes_5.svg";

const BadgesSection = (props) => {
  const Avisos = (
    <>
      <img src={Avisos100} alt="Badge_Aviso_100" />
      <img src={Avisos50} alt="Badge_Aviso_50" />
      <img src={Avisos25} alt="Badge_Aviso_25" />
    </>
  );

  const Tempo = (
    <>
      <img src={Tempo15} alt="Badge_Tempo_15" />
      <img src={Tempo10} alt="Badge_Tempo_10" />
      <img src={Tempo5} alt="Badge_Tempo_5" />
    </>
  );

  const Consumo = (
    <>
      <img src={Consumo1} alt="Badge_Consumo_1" />
      <img src={Consumo2} alt="Badge_Consumo_2" />
      <img src={Consumo3} alt="Badge_Consumo_3" />
    </>
  );

  const Sugestoes = (
    <>
      <img src={Sugestao1} alt="Badge_Sugestão_1" />
      <img src={Sugestao3} alt="Badge_Sugestão_3" />
      <img src={Sugestao5} alt="Badge_Sugestão_5" />
    </>
  );

  return (
    <BadgesSectionContainerStyles>
      <Overline textTranform="Default" variant="badges">
        {props.sectionName}
      </Overline>
      <BadgesSectionStyles>
        {props.sectionName === "Avisos"
          ? Avisos
          : props.sectionName === "Tempo de Resposta"
          ? Tempo
          : props.sectionName === "Consumo Mensal"
          ? Consumo
          : Sugestoes}
      </BadgesSectionStyles>
    </BadgesSectionContainerStyles>
  );
};

export default BadgesSection;
