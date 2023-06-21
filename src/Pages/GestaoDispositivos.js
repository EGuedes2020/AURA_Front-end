import { Main } from "../styles/Components/S_Main";
import { CardDefault } from "../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../styles/elements/CardDefaultSub2";
import { Overline } from "../styles/elements/Overline";
import { OverlineDefaultData } from "../styles/elements/OverlineDefaultData";
import { SelectInput } from "../styles/elements/SelectInput";

import { InfoBox } from "../styles/Components/InfoBox";

import { DoubleDefinicoesBTN } from "../styles/Components/S_DoubleDefinicoesBTN";
import { BtnDefinicoes } from "../styles/elements/ButtonDefinicoes";

import EditIcon from "../Assets/Icons/Edit_icon";
import UnPlugIcon from "../Assets/Icons/UnPlug_icon";
import SwitchIcon from "../Assets/Icons/Switch_icon";
import LocationIcon from "../Assets/Icons/Location_icon";
import InfoIcon from "../Assets/Icons/Info_icon";

// ----------- Modal ------------------

import { ModalBackground } from "../styles/Components/ModalBackground";
import { BadgesModalContainer } from "../styles/Components/BadgesModalContainer";

import { setModalState } from "../redux/ModalStateReducer_Slice";
import { BtnModal } from "../styles/elements/ButtonModal";

import { H6 } from "../styles/elements/H6";

import { SpanBtnModal } from "../styles/Components/S_Forms_ModalVeredito";

import { FormsModalGestaoDispositivos } from "../styles/Components/S_Forms_ModalGestaoDispositivos";

// -----------------------------------

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function GestaoDispositivos() {
  const [ModalDisplay, setModalDisplay] = useState(false);
  const dispatch = useDispatch();

  const [ModalTitle, setModalTitle] = useState("");
  const [ModalType, setModalType] = useState();

  useEffect(() => {
    // isto serve para ligar e desligar o scroll
    !ModalDisplay
      ? dispatch(setModalState(true))
      : dispatch(setModalState(false));
  }, [ModalDisplay, dispatch]);

  const nameInput = (
    <>
      <input type="text" placeholder="Novo nome da divisão"></input>
    </>
  );

  const changeSelect = (
    <>
      <SelectInput variant="modal">
        <option value="" disabled selected hidden>
          Selecione a divisão
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </SelectInput>
    </>
  );

  const AssignSelect = (
    <>
      <SelectInput variant="modal">
        <option value="" disabled selected hidden>
          Selecione a divisão
        </option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </SelectInput>
    </>
  );

  const Modal = (
    <>
      <ModalBackground></ModalBackground>
      <BadgesModalContainer>
        <H6 variant="black">{ModalTitle}</H6>
        <FormsModalGestaoDispositivos variant="modal">
          {ModalType}
          <SpanBtnModal>
            <BtnModal onClick={() => setModalDisplay(false)}>cancelar</BtnModal>
            <BtnModal
              onClick={() => setModalDisplay(false)}
              type="submit"
              variant="submit"
            >
              confirmar
            </BtnModal>
          </SpanBtnModal>
        </FormsModalGestaoDispositivos>
      </BadgesModalContainer>
    </>
  );

  const ModalGestao = (type) => {
    switch (type) {
      case "Edit":
        setModalTitle("Editar Nome");
        setModalType(nameInput);
        break;
      case "Change":
        setModalTitle("Mudar Divisão");
        setModalType(changeSelect);
        break;
      case "Assign":
        setModalTitle("Atribuir Divisão");
        setModalType(AssignSelect);
        break;
      default:
    }
    setModalDisplay(true);
  };

  const Selected = (
    <>
      <CardDefaultSub2 variant="1">
        <CardDefault variant="Sub">
          <Overline textTranform="Default" variant="Default">
            divisão
          </Overline>
          <OverlineDefaultData> Sala de Estar </OverlineDefaultData>
          <Overline variant="Default">Piso 1</Overline>
        </CardDefault>
      </CardDefaultSub2>
      <DoubleDefinicoesBTN btn="2">
        <BtnDefinicoes bgcolor="1" onClick={() => ModalGestao("Edit")}>
          <EditIcon /> Editar Nome
        </BtnDefinicoes>
        <BtnDefinicoes bgcolor="2">
          <UnPlugIcon /> Desativar
        </BtnDefinicoes>
      </DoubleDefinicoesBTN>
      <BtnDefinicoes bgcolor="3" onClick={() => ModalGestao("Change")}>
        <SwitchIcon /> Mudar Divisão
      </BtnDefinicoes>
    </>
  );

  const Select = (
    <>
      <InfoBox>
        <InfoIcon />
        <p>Este dispositivo não está atribuído a nenhuma divisão.</p>
      </InfoBox>
      <DoubleDefinicoesBTN btn="2">
        <BtnDefinicoes bgcolor="1" onClick={() => ModalGestao("Edit")}>
          <EditIcon /> Editar Nome
        </BtnDefinicoes>
        <BtnDefinicoes bgcolor="3" onClick={() => ModalGestao("Assign")}>
          <LocationIcon /> Atribuir Divisão
        </BtnDefinicoes>
      </DoubleDefinicoesBTN>
    </>
  );

  return (
    <Main>
      {ModalDisplay ? Modal : null}
      <CardDefaultSub2 variant="1">
        <CardDefault variant="Sub">
          <Overline textTranform="Default" variant="Default">
            Dispositivos ativos
          </Overline>
          <OverlineDefaultData> 123 </OverlineDefaultData>
        </CardDefault>
      </CardDefaultSub2>
      <H6> Localize Dispositivo </H6>
      <form>
        <SelectInput>
          <option value="" disabled selected hidden>
            Selecione um Dispositivo
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </SelectInput>
      </form>
      {/* {Selected} */}
    </Main>
  );
}

export default GestaoDispositivos;
