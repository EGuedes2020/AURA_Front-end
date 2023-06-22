import { Main } from "../../styles/Components/S_Main";

import ChartDadosContainer from "../../Components/ChartDadosContainer";
import MesDadosContainer from "../../Components/MesDadosContainer";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setChartData } from "../../redux/TemporadaStateReducer_Slice";

function Dados() {
  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  const InstitutionId = useSelector((state) => state.Login.Institution_id);

  const ChartData = useSelector((state) => state.Temporada.chartData);

  useEffect(() => {
    fetch(
      `https://aura-app.onrender.com/api/institutions/${InstitutionId}/energy/`
    ).then((res) => {
      dispatch(setChartData(res.data));
    });
  }, []);

  const MesDados = ChartData.map((item, index) => (
    <MesDadosContainer
      key={index}
      id={item.id}
      mes={item.month}
      energia={item.energy_consumed}
      despesa={item.cost_energy}
    />
  ));
  return (
    <Main>
      <ChartDadosContainer></ChartDadosContainer>
      {MesDados}
    </Main>
  );
}

export default Dados;
