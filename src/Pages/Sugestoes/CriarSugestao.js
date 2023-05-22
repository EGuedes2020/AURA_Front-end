import { Main } from "../../styles/Components/S_Main";
import { FormsCriarSugestao } from "../../styles/Components/S_Forms_CriarSugestao";
import { Btn } from "../../styles/elements/Button";

function CriarSugestao() {
  return (
    <Main>
      <FormsCriarSugestao id="CriarSugestao">
        <input type="text" placeholder="Título"></input>
        <textarea
          name="Descricao"
          form="CriarSugestao"
          placeholder="Descrição"
        ></textarea>
        <Btn variant="3" type="submit">
          publicar
        </Btn>
      </FormsCriarSugestao>
    </Main>
  );
}

export default CriarSugestao;
