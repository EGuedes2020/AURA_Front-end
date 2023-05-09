import { Main } from "../../styles/Components/S_Main";
import { CardDefault } from "../../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../../styles/elements/CardDefaultSub2";
import { Btn } from "../../styles/elements/Button";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";

// | Variants
// - CardDefaultContainer: 1 || 2 (containers)
// - CardDefault: Sub || Default (colocar "Sub" se tiver um "CardDefaultSub2" antes)
// - Overline: Default || Sugestoes (styles)
// - Btn: 1 || 2 || 3 || 4 (1 para o default, 2 para a versão default com text-transform none, 3 para a versão width 100%, 4 para a versão branca)

function Dispositivos() {
  return (
    <Main>
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline variant="Default"> Dispositivos </Overline>
          <OverlineDefaultData> 526389 </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline variant="Default"> Divisões </Overline>
          <OverlineDefaultData> 7492 </OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2>
          <CardDefault variant="Sub">
            <Overline variant="Default"> Avisos Ativos </Overline>
            <OverlineDefaultData> 621 </OverlineDefaultData>
          </CardDefault>
          <Btn variant="1"> ver detalhes </Btn>
        </CardDefaultSub2>
      </CardDefaultContainer>
    </Main>
  );
}

export default Dispositivos;
