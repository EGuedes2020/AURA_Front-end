import { Main } from "../styles/Components/S_Main";
import { CardDefault } from "../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../styles/elements/CardDefaultSub2";
import { Overline } from "../styles/elements/Overline";
import { OverlineDefaultData } from "../styles/elements/OverlineDefaultData";
import { H6 } from "../styles/elements/H6";
import { SelectInput } from "../styles/elements/SelectInput";

import { InfoBox } from "../styles/Components/InfoBox";

import { DoubleDefinicoesBTN } from "../styles/Components/S_DoubleDefinicoesBTN";
import { BtnDefinicoes } from "../styles/elements/ButtonDefinicoes";

import EditIcon from "../Assets/Icons/Edit_icon";
import UnPlugIcon from "../Assets/Icons/UnPlug_icon";
import SwitchIcon from "../Assets/Icons/Switch_icon";
import LocationIcon from "../Assets/Icons/Location_icon";
import InfoIcon from "../Assets/Icons/Info_icon";

function GestaoDispositivos() {
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
        <BtnDefinicoes bgcolor="1">
          <EditIcon /> Editar Nome
        </BtnDefinicoes>
        <BtnDefinicoes bgcolor="2">
          <UnPlugIcon /> Desativar
        </BtnDefinicoes>
      </DoubleDefinicoesBTN>
      <BtnDefinicoes bgcolor="3">
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
        <BtnDefinicoes bgcolor="1">
          <EditIcon /> Editar Nome
        </BtnDefinicoes>
        <BtnDefinicoes bgcolor="3">
          <LocationIcon /> Atribuir Divisão
        </BtnDefinicoes>
      </DoubleDefinicoesBTN>
    </>
  );

  return (
    <Main>
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
      {Selected}
    </Main>
  );
}

export default GestaoDispositivos;
