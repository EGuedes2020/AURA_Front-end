import { Main } from "../styles/Components/S_Main";
import { Error404Container } from "../styles/Components/Error404Container";
import { Btn } from "../styles/elements/Button";

import Error404 from "../Assets/Error_404.svg";

function PageNotFound() {
  return (
    <Main variant="error404">
      <Error404Container>
        <div>
          <span>ERROR 404</span>
          <p>Ligou-se à tomada errada!</p>
          <p>Volte a conectar-se à página anterior.</p>
          <img src={Error404} alt="error_404_img" />
        </div>
        <div>
          <Btn variant="3" type="submit" onClick={() => window.history.back()}>
            retornar
          </Btn>
        </div>
      </Error404Container>
    </Main>
  );
}

export default PageNotFound;
