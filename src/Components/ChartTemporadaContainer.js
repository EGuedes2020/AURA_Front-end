import { CardDefaultContainer } from "../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../styles/elements/CardDefaultSub2";
import { Btn } from "../styles/elements/Button";
import { Overline } from "../styles/elements/Overline";
import { ChartTemporada } from "../styles/Components/S_ChartTemporada";

import { Link } from "react-router-dom";

import Chart from "./Chart";

const ChartTemporadaContainer = () => {
  return (
    <ChartTemporada>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2>
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              Dados
            </Overline>
          </CardDefault>
          <Link to="/Sugestao">
            <Btn variant="4"> ver detalhes </Btn>
          </Link>
        </CardDefaultSub2>
      </CardDefaultContainer>
      <Chart></Chart>
    </ChartTemporada>
  );
};

export default ChartTemporadaContainer;
