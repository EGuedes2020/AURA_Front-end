import { Main } from "../../styles/Components/S_Main";
import { H5 } from "../../styles/elements/H5";
import { H6 } from "../../styles/elements/H6";
import { Overline } from "../../styles/elements/Overline";
import { PCardSugestoes } from "../../styles/elements/PCardSugestoes";
import { CardDefault } from "../../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../../styles/elements/CardDefaultSub2";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import { ModalBackground } from "../../styles/Components/ModalBackground";
import { SugestaoModalContainer } from "../../styles/Components/SugestaoModalContainer";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { Btn } from "../../styles/elements/Button";
import { BtnVeredito } from "../../styles/elements/ButtonVeredito";
import {
  FormsModalVeredito,
  DivRadioBox,
  SpanBtnModal,
  SpanVeredito,
} from "../../styles/Components/S_Forms_ModalVeredito";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  setModalState,
  setVereditoState,
} from "../../redux/ModalStateReducer_Slice";

import AprovadoIcon from "../../Assets/Icons/Aprovado_icon";
import DesaprovadoIcon from "../../Assets/Icons/Desaprovado_icon";

function Sugestao() {
  const [ModalDisplay, setModalDisplay] = useState(false);
  const dispatch = useDispatch();

  const [VereditoAprovado, setVereditoAprovado] = useState("unchecked");
  const [VereditoDesaprovado, setVereditoDesaprovado] = useState("unchecked");

  const [IconAprovado, setIconAprovado] = useState("unchecked");
  const [IconDesaprovado, setIconDesaprovado] = useState("unchecked");

  const VereditoState = useSelector((state) => state.Modal.vereditoState); // fazer depois este estado ser precarregado com o valor real presente na base de dados.
  const [Veredito, setVeredito] = useState("");

  useEffect(() => {
    // isto serve para ligar e desligar o scroll
    !ModalDisplay
      ? dispatch(setModalState(true))
      : dispatch(setModalState(false));

    if (VereditoState === "Aprovado") {
      setVereditoAprovado("checked");
      setIconAprovado("checked");
      setVereditoDesaprovado("unchecked");
      setIconDesaprovado("unchecked");
      setVeredito("Aprovado");
    } else if (VereditoState === "Desaprovado") {
      setVereditoAprovado("unchecked");
      setIconAprovado("unchecked");
      setVereditoDesaprovado("checked");
      setIconDesaprovado("checked");
      setVeredito("Desaprovado");
    }
  }, [ModalDisplay, dispatch, VereditoState]);

  useEffect(() => {
    if (Veredito === "Aprovado") {
      setVereditoAprovado("checked");
      setIconAprovado("checked");
      setVereditoDesaprovado("unchecked");
      setIconDesaprovado("unchecked");
    } else if (Veredito === "Desaprovado") {
      setVereditoAprovado("unchecked");
      setIconAprovado("unchecked");
      setVereditoDesaprovado("checked");
      setIconDesaprovado("checked");
    }
  }, [dispatch, Veredito]);

  const confirmarVeredito = () => {
    setModalDisplay(false);
    if (Veredito === "Aprovado") {
      dispatch(setVereditoState("Aprovado"));
    } else if (Veredito === "Desaprovado") {
      dispatch(setVereditoState("Desaprovado"));
    }
  };

  const CancelarVeredito = () => {
    setModalDisplay(false);
    setVereditoAprovado("unchecked");
    setIconAprovado("unchecked");
    setVereditoDesaprovado("unchecked");
    setIconDesaprovado("unchecked");
    setVeredito(VereditoState);
  };

  const Modal = (
    <>
      <ModalBackground></ModalBackground>
      <SugestaoModalContainer>
        <H6 variant="black">Selecione o Veredito</H6>
        <FormsModalVeredito id="SugestaoVeredito">
          <DivRadioBox>
            <div onClick={() => setVeredito("Aprovado")}>
              <input
                onChange={() => (Veredito === "Aprovado" ? "checked" : "")}
                checked={Veredito === "Aprovado" ? "checked" : ""}
                type="radio"
                name="veredito"
                id="Aprovado"
              ></input>
              <div>
                <AprovadoIcon
                  color={
                    IconAprovado === "unchecked"
                      ? "var(--color-black)"
                      : "var(--color-gray-3)"
                  }
                />
                <SpanVeredito variant={VereditoAprovado}>Aprovado</SpanVeredito>
              </div>
            </div>
            <div onClick={() => setVeredito("Desaprovado")}>
              <input
                onChange={() => (Veredito === "Desaprovado" ? "Checked" : "")}
                checked={Veredito === "Desaprovado" ? "checked" : ""}
                type="radio"
                name="veredito"
                id="Desaprovado"
              ></input>
              <div>
                <DesaprovadoIcon
                  color={
                    IconDesaprovado === "unchecked"
                      ? "var(--color-black)"
                      : "var(--color-gray-3)"
                  }
                />
                <SpanVeredito variant={VereditoDesaprovado}>
                  Desaprovado
                </SpanVeredito>
              </div>
            </div>
          </DivRadioBox>
          <SpanBtnModal>
            <BtnVeredito onClick={CancelarVeredito}>Cancelar</BtnVeredito>
            <BtnVeredito
              onClick={confirmarVeredito}
              type="submit"
              variant="submit"
            >
              Confirmar
            </BtnVeredito>
          </SpanBtnModal>
        </FormsModalVeredito>
      </SugestaoModalContainer>
    </>
  );

  return (
    <Main>
      {ModalDisplay ? Modal : null}
      <Overline variant="Sugestao"> 12/04/2023 </Overline>
      <H5> Aquisições Sustentáveis </H5>
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
      <CardDefaultContainer variant="1">
        <CardDefaultSub2>
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              Votos
            </Overline>
            <OverlineDefaultData> 23 </OverlineDefaultData>
          </CardDefault>
          <Btn onClick={() => setModalDisplay(true)} variant="1">
            Veredito
          </Btn>
        </CardDefaultSub2>
      </CardDefaultContainer>
    </Main>
  );
}

export default Sugestao;
