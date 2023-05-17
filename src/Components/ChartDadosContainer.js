import { CardDefaultContainer } from "../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../styles/elements/CardDefaultSub2";
import { Overline } from "../styles/elements/Overline";
import { ChartTemporada } from "../styles/Components/S_ChartTemporada";

import Chart from "./Chart";

const ChartTemporadaContainer = (props) => {
  return (
    <ChartTemporada>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2>
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              despesas por mês
            </Overline>
          </CardDefault>
        </CardDefaultSub2>
      </CardDefaultContainer>
      <Chart></Chart>
    </ChartTemporada>
  );
};

export default ChartTemporadaContainer;
