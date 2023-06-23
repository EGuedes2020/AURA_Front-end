import { useState, useEffect } from "react";

import { CardDefaultContainer } from "../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../styles/elements/CardDefault";
import { Overline } from "../styles/elements/Overline";
import { OverlineDefaultData } from "../styles/elements/OverlineDefaultData";
import { H6 } from "../styles/elements/H6";
import { Btn } from "../styles/elements/Button";

import { Link } from "react-router-dom";

const MesDadosContainer = (props) => {
  const [ExistData, setExistData] = useState(false);

  useEffect(() => {
    if (props.energia !== 0 && props.despesa !== 0) {
      setExistData(true);
    } else {
      setExistData(false);
    }
  }, [props.energia, props, ExistData]);

  const MesDados = (
    <>
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            energia
          </Overline>
          <OverlineDefaultData>
            {props.energia} <Overline variant="Default"> kWh </Overline>
          </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            despesa
          </Overline>
          <OverlineDefaultData>
            {props.despesa} <Overline variant="Default"> € </Overline>
          </OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
    </>
  );

  const PreencherDados = (
    <>
      <CardDefaultContainer variant="1">
        <CardDefault>
          <Link to={`/PreencherDadosMes?id=${props.id}&mes=${props.mes}`}>
            <Btn variant="3"> Preencher </Btn>
          </Link>
        </CardDefault>
      </CardDefaultContainer>
    </>
  );

  return (
    <section>
      <H6 variant="Dados"> {props.mes} </H6>
      {ExistData ? MesDados : PreencherDados}
    </section>
  );
};

export default MesDadosContainer;
