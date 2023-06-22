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
import { BtnUpdateVeredito } from "../../styles/elements/ButtonUpdateVeredito";
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

import { useLocation } from "react-router-dom";

import axios from "axios";

import { setSugestao } from "../../redux/SugestoesStateReducer_Slice";

function Sugestao() {
  const [ModalDisplay, setModalDisplay] = useState(false);
  const dispatch = useDispatch();

  const [UpVote, setUpVote] = useState(false);

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

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");

  const fetch = async (url) => {
    return await axios.get(url);
  };

  useEffect(() => {
    fetch(`https://aura-app.onrender.com/api/suggestions/${userId}`).then(
      (res) => {
        dispatch(setSugestao(res.data));
        console.log(res.data);
      }
    );
  }, []);

  const SugestaoData = useSelector((state) => state.Sugestoes.sugestao);

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

  const Pending = (
    <CardDefaultContainer variant="1">
      <CardDefaultSub2 spacing="sugestoes">
        <CardDefault variant="Sub">
          <Overline textTranform="Default" variant="Default">
            Votos
          </Overline>
          <OverlineDefaultData>
            {SugestaoData.number_of_votes}
          </OverlineDefaultData>
        </CardDefault>
        <Btn onClick={() => setModalDisplay(true)} variant="1">
          Veredito
        </Btn>
      </CardDefaultSub2>
    </CardDefaultContainer>
  );

  const Vote = (
    <CardDefaultContainer variant="1" spacing="sugestoes">
      <CardDefaultSub2>
        <CardDefault variant="Sub">
          <Overline textTranform="Default" variant="Default">
            Votos
          </Overline>
          <OverlineDefaultData>
            {SugestaoData.number_of_votes}
          </OverlineDefaultData>
        </CardDefault>
      </CardDefaultSub2>
    </CardDefaultContainer>
  );

  const VereditoFinalAdmin = (
    <>
      <CardDefaultContainer variant="2" spacing="sugestoes">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Votos
          </Overline>
          <OverlineDefaultData>
            {SugestaoData.number_of_votes}
          </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Veredito
          </Overline>
          {SugestaoData.status !== "pending" ? (
            SugestaoData.status === "approved" ? (
              <AprovadoIcon />
            ) : (
              <DesaprovadoIcon />
            )
          ) : null}
        </CardDefault>
      </CardDefaultContainer>
      <BtnUpdateVeredito onClick={() => setModalDisplay(true)}>
        mudar veredito
      </BtnUpdateVeredito>
    </>
  );

  const VereditoFinalColab = (
    <CardDefaultContainer variant="2" spacing="sugestoes">
      <CardDefault>
        <Overline textTranform="Default" variant="Default">
          Votos
        </Overline>
        <OverlineDefaultData>
          {SugestaoData.number_of_votes}
        </OverlineDefaultData>
      </CardDefault>
      <CardDefault>
        <Overline textTranform="Default" variant="Default">
          Veredito
        </Overline>
        {SugestaoData.status !== "pending" ? (
          SugestaoData.status === "approved" ? (
            <AprovadoIcon />
          ) : (
            <DesaprovadoIcon />
          )
        ) : null}
      </CardDefault>
    </CardDefaultContainer>
  );

  const Role = useSelector((state) => state.Login.Role);

  return (
    <Main>
      {ModalDisplay ? Modal : null}
      <Overline variant="Sugestao"></Overline>
      <H5> {SugestaoData.title} </H5>
      <PCardSugestoes>{SugestaoData.description}</PCardSugestoes>
      {Role === "admin"
        ? SugestaoData.status !== "pending"
          ? VereditoFinalAdmin
          : Pending
        : SugestaoData.status !== "pending"
        ? VereditoFinalColab
        : Vote}
    </Main>
  );
}

export default Sugestao;
