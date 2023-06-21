import { Main } from "../styles/Components/S_Main";
import { H5 } from "../styles/elements/H5";
import { H6 } from "../styles/elements/H6";
import { InfoBox } from "../styles/Components/InfoBox";
import { CardDefault } from "../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../styles/elements/CardDefaultSub2";
import { Overline } from "../styles/elements/Overline";
import { OverlineDefaultData } from "../styles/elements/OverlineDefaultData";
import { CardDefaultContainer } from "../styles/Components/S_CardDefaultContainer";
import { FormsRegisto } from "../styles/Components/S_Forms_Registo";
import { Btn } from "../styles/elements/Button";

import InfoIcon from "../Assets/Icons/Info_icon";

function Registo() {
  return (
    <Main>
      <H5>Registo</H5>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2 variant="1">
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              seu Email
            </Overline>
            <OverlineDefaultData> davidsilva@gmail.com </OverlineDefaultData>
          </CardDefault>
        </CardDefaultSub2>
      </CardDefaultContainer>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2 variant="1">
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              Instituição que convidou
            </Overline>
            <OverlineDefaultData> Ponte de Vagos </OverlineDefaultData>
          </CardDefault>
        </CardDefaultSub2>
      </CardDefaultContainer>
      <FormsRegisto>
        <input type="text" placeholder="Nome completo"></input>
        <input type="date" placeholder="Data de Nascimento"></input>
        <H6> Género </H6>
        <label>
          <input type="radio" name="genero" value="Feminino"></input> Feminino{" "}
        </label>
        <label>
          <input type="radio" name="genero" value="Masculino"></input>Masculino
        </label>
        <label>
          <input type="radio" name="genero" value="Não binário"></input>Não
          binário
        </label>
        <input type="number" placeholder="Número de telemóvel"></input>
        <input type="text" placeholder="Morada"></input>
        <InfoBox>
          <InfoIcon />
          <p>
            Apenas o administrador da instituição terá acesso às informações
            anteriores.
          </p>
        </InfoBox>
        <input type="password" placeholder="Senha"></input>
        <input type="password" placeholder="Confirme a senha"></input>
        <Btn variant="3" type="submit">
          Registrar
        </Btn>
      </FormsRegisto>
    </Main>
  );
}

export default Registo;
