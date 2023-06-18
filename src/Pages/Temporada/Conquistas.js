import { Main } from "../../styles/Components/S_Main";
import { ConquistasHeader } from "../../styles/Components/ConquistasHeader";

import BadgesSection from "../../Components/BadgesSection";

function Conquistas() {
  return (
    <Main>
      <ConquistasHeader>
        <span>
          Fácil<div></div>
        </span>
        <span>
          Médio<div></div>
        </span>
        <span>
          Difícil<div></div>
        </span>
      </ConquistasHeader>
      <BadgesSection sectionName="Avisos"></BadgesSection>
      <BadgesSection sectionName="Tempo de Resposta"></BadgesSection>
      <BadgesSection sectionName="Consumo Mensal"></BadgesSection>
      <BadgesSection sectionName="Sugestões"></BadgesSection>
    </Main>
  );
}

export default Conquistas;
