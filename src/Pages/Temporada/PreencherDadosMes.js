import { Main } from "../../styles/Components/S_Main";
import { FormsPreencherDadosMes } from "../../styles/Components/S_Forms_PreencherDadosMes";
import { H6 } from "../../styles/elements/H6";
import { Btn } from "../../styles/elements/Button";

import React, { useState } from "react";

import { useLocation } from "react-router-dom";
import axios from "axios";

function PreencherDadosMes() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Id = searchParams.get("id");
  const mes = searchParams.get("mes");

  const [cost_energy, setCost_energy] = useState("");
  const [energy_consumed, setEnergy_consumed] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://aura-app.onrender.com/api/energy/${Id}/`,
        { cost_energy, energy_consumed }
      );
      console.log(response.data);
      if (response.data) {
      }
      // Handle response as needed
    } catch (error) {
      console.error(error);
      // Handle error as needed
    }
    window.history.back();
  };

  return (
    <Main>
      <H6 variant="Temporada" align="center">
        {mes}
      </H6>
      <FormsPreencherDadosMes
        method="PUT"
        variant="PreencherDadosMes"
        onSubmit={handleSubmit}
      >
        <span>
          <span> kWh </span>
          <input
            type="number"
            placeholder="Gasto Energético"
            onChange={(e) => setEnergy_consumed(e.target.value)}
          ></input>
        </span>
        <span>
          <span> € </span>
          <input
            type="number"
            placeholder="Custo Energético"
            onChange={(e) => setCost_energy(e.target.value)}
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
