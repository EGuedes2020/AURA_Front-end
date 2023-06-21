import { Main } from "../styles/Components/S_Main";
import { Btn } from "../styles/elements/Button";
import { FormsRecuperarConta } from "../styles/Components/S_Forms_RecuperarConta";
import { H5 } from "../styles/elements/H5";
import { InfoBox } from "../styles/Components/InfoBox";

import InfoIcon from "../Assets/Icons/Info_icon";

function RecuperarConta() {
  return (
    <Main>
      <H5>Recuperar Conta</H5>
      <InfoBox>
        <InfoIcon />
        <p>Será enviada uma mensagem para o email introduzido.</p>
      </InfoBox>
      <FormsRecuperarConta id="CriarSugestao">
        <input type="email" placeholder="Email"></input>
        <Btn variant="3" type="submit">
          Enviar
        </Btn>
      </FormsRecuperarConta>
    </Main>
  );
}

export default RecuperarConta;
