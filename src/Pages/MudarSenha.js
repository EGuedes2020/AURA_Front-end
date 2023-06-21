import { Main } from "../styles/Components/S_Main";
import { Btn } from "../styles/elements/Button";
import { FormsRecuperarConta } from "../styles/Components/S_Forms_RecuperarConta";
import { H5 } from "../styles/elements/H5";

function MudarSenha() {
  return (
    <Main>
      <H5>Mudar Senha</H5>
      <FormsRecuperarConta id="CriarSugestao">
        <input type="password" placeholder="Nova Senha"></input>
        <input type="password" placeholder="Confirme a nova senha"></input>
        <Btn variant="3" type="submit">
          Confirmar
        </Btn>
      </FormsRecuperarConta>
    </Main>
  );
}

export default MudarSenha;
