import { Main } from "../../styles/Components/S_Main";
import { FormsPreencherDadosMes } from "../../styles/Components/S_Forms_PreencherDadosMes";
import { H6 } from "../../styles/elements/H6";
import { Btn } from "../../styles/elements/Button";

import React, { useState } from "react";

function PreencherDadosMes() {
  /* const [inputConsumeValue, setInputConsumeValue] = useState("");
  const [inputCostValue, setInputCostValue] = useState(""); */

  /* const handleInputConsumeValue = (e) => {
    const value = e.target.value;
    //const sanitizedValue = value.replace(",", ".");
    const isValid = /^-?\d+(,\d+)?$/.test(value);

    if (isValid) {
      setInputConsumeValue(value);
    }
  };

  const handleInputCostValue = (e) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(",", ".");
    const isValid = /^-?\d*(\.\d*)?$/.test(sanitizedValue);

    if (isValid) {
      setInputCostValue(sanitizedValue);
    }
  }; */

  return (
    <Main>
      <H6 variant="Temporada" align="center">
        Abril
      </H6>
      <FormsPreencherDadosMes variant="PreencherDadosMes">
        <span>
          <span> kWh </span>
          <input
            type="number"
            placeholder="Gasto Energético"
         /*    value={inputConsumeValue}
            onChange={handleInputConsumeValue} */
          ></input>
        </span>
        <span>
          <span> € </span>
          <input
            type="number"
            placeholder="Custo Energético"
           /*  value={inputCostValue}
            onChange={handleInputCostValue} */
          ></input>
        </span>
        <Btn variant="3" type="submit">
          Submeter
        </Btn>
      </FormsPreencherDadosMes>
    </Main>
  );
}

export default PreencherDadosMes;
