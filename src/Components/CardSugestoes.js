import { CardSugestoesContainer } from "../styles/Components/S_CardSugestoesContainer";
import { OverlineSugestoes } from "../styles/elements/OverlineSugestoes";
import { PCardSugestoes } from "../styles/elements/PCardSugestoes";
import { SecVotosVerMaisSugestoesContainer } from "../styles/Components/SecVotosVerMaisSugestoesContainer";
import { SecVotosSugestoes } from "../styles/elements/SecVotosSugestoes";
import { SecVerMaisSugestoes } from "../styles/elements/SecVerMaisSugestoes";
import { H6 } from "../styles/elements/H6";

import { Link } from "react-router-dom";

import { useState } from "react";

import AprovadoIcon from "../Assets/Icons/Aprovado_icon";
import DesaprovadoIcon from "../Assets/Icons/Desaprovado_icon";

// | Variants
// - Overline: Default || Sugestoes (styles)
// - Btn: 1 || 2 || 3 || 4 (1 para o default, 2 para a versão default com text-transform none, 3 para a versão width 100%, 4 para a versão branca)

const CardSugestoes = (props) => {
  const [Veredito, setVeredito] = useState(true);

  const { date } = props;
  const dateObj = new Date(date);

  return (
    <CardSugestoesContainer status={props.status}>
      <OverlineSugestoes status={props.status}>
        {dateObj.toISOString().split("T")[0]}
      </OverlineSugestoes>
      <H6 status={props.status}> {props.title} </H6>
      <PCardSugestoes type="card" status={props.status}>
        {props.description}
      </PCardSugestoes>
      <SecVotosVerMaisSugestoesContainer status={props.status}>
        <SecVotosSugestoes status={props.status}>
        {props.votes} <span> Votos </span>
        </SecVotosSugestoes>
        {props.status !== "pending" ? (
          props.status === "approved" ? (
            <AprovadoIcon />
          ) : (
            <DesaprovadoIcon />
          )
        ) : null}
        <SecVerMaisSugestoes status={props.status}>
          <Link to={`/Sugestao?id=${props.id}`}>Ver mais</Link>
        </SecVerMaisSugestoes>
      </SecVotosVerMaisSugestoesContainer>
    </CardSugestoesContainer>
  );
};

export default CardSugestoes;
