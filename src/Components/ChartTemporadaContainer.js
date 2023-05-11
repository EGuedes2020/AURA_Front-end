import { CardDefaultContainer } from "../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../styles/elements/CardDefaultSub2";
import { Btn } from "../styles/elements/Button";
import { Overline } from "../styles/elements/Overline";
import { ChartTemporada } from "../styles/Components/S_ChartTemporada";

const ChartTemporadaContainer = () => {
  return (
    <ChartTemporada>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2>
          <CardDefault variant="Sub">
            <Overline variant="Default"> Dados </Overline>
          </CardDefault>
          <Btn variant="4"> ver detalhes </Btn>
        </CardDefaultSub2>
      </CardDefaultContainer>
    </ChartTemporada>
  );
};

export default ChartTemporadaContainer;
