import { CardSugestoesContainer } from "../styles/Components/S_CardSugestoesContainer";
import { Overline } from "../styles/elements/Overline";
import { PCardSugestoes } from "../styles/elements/PCardSugestoes";
import { SecVotosVerMaisSugestoesContainer } from "../styles/Components/SecVotosVerMaisSugestoesContainer";
import { SecVotosSugestoes } from "../styles/elements/SecVotosSugestoes";
import { SecVerMaisSugestoes } from "../styles/elements/SecVerMaisSugestoes";
import { H6 } from "../styles/elements/H6";

import { Link } from "react-router-dom";

// | Variants
// - Overline: Default || Sugestoes (styles)
// - Btn: 1 || 2 || 3 || 4 (1 para o default, 2 para a versão default com text-transform none, 3 para a versão width 100%, 4 para a versão branca)

const CardSugestoes = () => {
  return (
    <CardSugestoesContainer>
      <Overline variant="Sugestoes"> 12/04/2023 </Overline>
      <H6 variant="Sugestoes"> Aquisições Sustentáveis </H6>
      <PCardSugestoes>
        Aquisições Sustentáveis são uma proposta importante e relevante para
        garantir que as compras realizadas por organizações, governos e empresas
        sejam feitas de forma responsável com o meio ambiente e a sociedade. A
        ideia por trás das aquisições sustentáveis é considerar não apenas o
        preço do produto ou serviço, mas também seu impacto ambiental e social
        ao longo de todo o seu ciclo de vida. Dessa forma, são levados em
        consideração critérios como a eficiência energética, o uso de materiais
        reciclados, o respeito aos direitos trabalhistas e a responsabilidade
        social da empresa fornecedora. Ao adotar práticas de aquisições
        sustentáveis, as organizações e empresas contribuem para a preservação
        do meio ambiente, redução de emissões de gases de efeito estufa, redução
        do desperdício e promoção de uma economia mais justa e sustentável. Além
        disso, as empresas fornecedoras são incentivadas a adotar práticas mais
        sustentáveis em suas operações, o que pode gerar um impacto positivo em
        toda a cadeia produtiva. Para implementar aquisições sustentáveis, é
        necessário estabelecer critérios claros e objetivos, desenvolver
        mecanismos de monitoramento e avaliação, capacitar os envolvidos no
        processo de compras e estabelecer parcerias com fornecedores
        comprometidos com a sustentabilidade. Em resumo, a adoção de práticas de
        aquisições sustentáveis é uma proposta que contribui para a promoção de
        um mundo mais justo e sustentável, em que as empresas e organizações se
        preocupam não apenas com seus resultados financeiros, mas também com o
        impacto que geram na sociedade e no meio ambiente.
      </PCardSugestoes>
      <SecVotosVerMaisSugestoesContainer>
        <SecVotosSugestoes>
          33 <span> Votos </span>
        </SecVotosSugestoes>
        <SecVerMaisSugestoes>
          <Link to="/Sugestao">Ver mais</Link>
        </SecVerMaisSugestoes>
      </SecVotosVerMaisSugestoesContainer>
    </CardSugestoesContainer>
  );
};

export default CardSugestoes;
