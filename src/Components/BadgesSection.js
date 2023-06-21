import { BadgesSectionContainerStyles } from "../styles/Components/BadgesSectionContainerStyles";
import { BadgesSectionStyles } from "../styles/Components/BadgesSectionStyles";
import { Overline } from "../styles/elements/Overline";

// ----------- Modal ------------------

import { ModalBackground } from "../styles/Components/ModalBackground";
import { BadgesModalContainer } from "../styles/Components/BadgesModalContainer";

import { setModalState } from "../redux/ModalStateReducer_Slice";
import { BtnModal } from "../styles/elements/ButtonModal";

import { H6 } from "../styles/elements/H6";

// -----------------------------------

import { ConquistaEstado } from "../styles/elements/ConquistaEstado";
import { ConquistaCategoria } from "../styles/elements/ConquistaCategoria";
import { ConquistaInfoSec } from "../styles/Components/ConquistaInfoSec";

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

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const BadgesSection = (props) => {
  const [ModalDisplay, setModalDisplay] = useState(false);
  const dispatch = useDispatch();

  const [Badge, setBadge] = useState();
  const [BadgeCategory, setBadgeCategory] = useState();
  const [BadgeDescription, setDescription] = useState();

  //const VereditoState = useSelector((state) => state.Modal.vereditoState);

  useEffect(() => {
    // isto serve para ligar e desligar o scroll
    !ModalDisplay
      ? dispatch(setModalState(true))
      : dispatch(setModalState(false));
  }, [ModalDisplay, dispatch]);

  const Modal = (
    <>
      <ModalBackground></ModalBackground>
      <BadgesModalContainer>
        <H6 variant="black">Conquista</H6>
        <div>
          <img src={Badge} alt="Badge" />
          <div>
            <label>Estado:</label>
            <ConquistaEstado>
              <span>Conquistado</span>
            </ConquistaEstado>
            <label>Categoria:</label>
            <ConquistaCategoria>
              <span>{BadgeCategory}</span>
            </ConquistaCategoria>
          </div>
        </div>
        <ConquistaInfoSec>
          <label>Descrição:</label>
          <p>{BadgeDescription}</p>
        </ConquistaInfoSec>
        <BtnModal onClick={() => setModalDisplay(false)} variant="submit">
          Entendi
        </BtnModal>
      </BadgesModalContainer>
    </>
  );

  const BadgeSelect = (badge) => {
    switch (badge) {
      case "Avisos100":
        setBadge(Avisos100);
        setBadgeCategory("Avisos");
        setDescription("A instituição recebeu menos de 100 avisos.");
        break;
      case "Avisos50":
        setBadge(Avisos50);
        setBadgeCategory("Avisos");
        setDescription("A instituição recebeu menos de 50 avisos.");
        break;
      case "Avisos25":
        setBadge(Avisos25);
        setBadgeCategory("Avisos");
        setDescription("A instituição recebeu menos de 25 avisos.");
        break;
      case "Tempo15":
        setBadge(Tempo15);
        setBadgeCategory("Tempo de resposta");
        setDescription(
          "O tempo médio de resposta aos avisos é menor do que 15 minutos."
        );
        break;
      case "Tempo10":
        setBadge(Tempo10);
        setBadgeCategory("Tempo de resposta");
        setDescription(
          "O tempo médio de resposta aos avisos é menor do que 10 minutos."
        );
        break;
      case "Tempo5":
        setBadge(Tempo5);
        setBadgeCategory("Tempo de resposta");
        setDescription(
          "O tempo médio de resposta aos avisos é menor do que 5 minutos."
        );
        break;
      case "Consumo1":
        setBadge(Consumo1);
        setBadgeCategory("Consumo mensal");
        setDescription(
          "A instituição consumiu menos energia comparativamente ao mês passado."
        );
        break;
      case "Consumo2":
        setBadge(Consumo2);
        setBadgeCategory("Consumo mensal");
        setDescription(
          "A instituição consumiu menos energia comparativamente aos 2 meses anteriores."
        );
        break;
      case "Consumo3":
        setBadge(Consumo3);
        setBadgeCategory("Consumo mensal");
        setDescription(
          "A instituição consumiu menos energia comparativamente a 3 ou mais meses prévios."
        );
        break;
      case "Sugestao1":
        setBadge(Sugestao1);
        setBadgeCategory("Sugestões");
        setDescription("A instituição aprovou 1 sugestão.");
        break;
      case "Sugestao3":
        setBadge(Sugestao3);
        setBadgeCategory("Sugestões");
        setDescription("A instituição aprovou pelo menos 3 sugestões.");
        break;
      case "Sugestao5":
        setBadge(Sugestao5);
        setBadgeCategory("Sugestões");
        setDescription("A instituição aprovou 5 ou mais sugestões");
        break;
      default:
    }
    setModalDisplay(true);
  };

  const Avisos = (
    <>
      <img
        onClick={() => BadgeSelect("Avisos100")}
        src={Avisos100}
        alt="Badge_Aviso_100"
      />
      <img
        onClick={() => BadgeSelect("Avisos50")}
        src={Avisos50}
        alt="Badge_Aviso_50"
      />
      <img
        onClick={() => BadgeSelect("Avisos25")}
        src={Avisos25}
        alt="Badge_Aviso_25"
      />
    </>
  );

  const Tempo = (
    <>
      <img
        onClick={() => BadgeSelect("Tempo15")}
        src={Tempo15}
        alt="Badge_Tempo_15"
      />
      <img
        onClick={() => BadgeSelect("Tempo10")}
        src={Tempo10}
        alt="Badge_Tempo_10"
      />
      <img
        onClick={() => BadgeSelect("Tempo5")}
        src={Tempo5}
        alt="Badge_Tempo_5"
      />
    </>
  );

  const Consumo = (
    <>
      <img
        onClick={() => BadgeSelect("Consumo1")}
        src={Consumo1}
        alt="Badge_Consumo_1"
      />
      <img
        onClick={() => BadgeSelect("Consumo2")}
        src={Consumo2}
        alt="Badge_Consumo_2"
      />
      <img
        onClick={() => BadgeSelect("Consumo3")}
        src={Consumo3}
        alt="Badge_Consumo_3"
      />
    </>
  );

  const Sugestoes = (
    <>
      <img
        onClick={() => BadgeSelect("Sugestao1")}
        src={Sugestao1}
        alt="Badge_Sugestão_1"
      />
      <img
        onClick={() => BadgeSelect("Sugestao3")}
        src={Sugestao3}
        alt="Badge_Sugestão_3"
      />
      <img
        onClick={() => BadgeSelect("Sugestao5")}
        src={Sugestao5}
        alt="Badge_Sugestão_5"
      />
    </>
  );

  return (
    <>
      {ModalDisplay ? Modal : null}
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
    </>
  );
};

export default BadgesSection;
