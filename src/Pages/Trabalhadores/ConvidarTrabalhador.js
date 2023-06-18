import { Main } from "../../styles/Components/S_Main";
import { Btn } from "../../styles/elements/Button";
import { FormsConvidarTraballhador } from "../../styles/Components/S_Forms_ConvidarTraballhador";
function ConvidarTrabalhador() {
  return (
    <Main>
      <FormsConvidarTraballhador id="CriarSugestao">
        <input type="text" placeholder="Primeiro nome e sobrenome"></input>
        <input type="email" placeholder="Email"></input>
        <Btn variant="3" type="submit">
          Enviar convite
        </Btn>
      </FormsConvidarTraballhador>
    </Main>
  );
}

export default ConvidarTrabalhador;
