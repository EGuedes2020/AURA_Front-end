import { Main } from "../../styles/Components/S_Main";
import { H6 } from "../../styles/elements/H6";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../../styles/elements/CardDefault";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { BadgesContainer } from "../../styles/Components/BadgesContainer";
import { Btn } from "../../styles/elements/Button";
import { CardDefaultSub2 } from "../../styles/elements/CardDefaultSub2";

import { Link } from "react-router-dom";

import ChartTemporadaContainer from "../../Components/ChartTemporadaContainer";
import SeasonBadges from "../../Components/SeasonBadges";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setChartData } from "../../redux/TemporadaStateReducer_Slice";
import { setInstituicao } from "../../redux/InstituicoesStateReducer_Slice";

function Temporada() {
  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  const InstitutionId = useSelector((state) => state.Login.Institution_id);

  const InstitutionData = useSelector(
    (state) => state.Instituicoes.instituicao
  );

  useEffect(() => {
    fetch(
      `https://aura-app.onrender.com/api/institutions/${InstitutionId}/energy/`
    ).then((res) => {
      dispatch(setChartData(res.data));
    });
  }, []);

  useEffect(() => {
    fetch(`https://aura-app.onrender.com/api/inst/${InstitutionId}`).then(
      (res) => {
        dispatch(setInstituicao(res.data));
        console.log(res.data);
      }
    );
  }, []);

  const Role = useSelector((state) => state.Login.Role);

  return (
    <Main>
      <H6 variant="Temporada" align="center">
        Temporada 1
      </H6>
      {Role === "admin" ? (
        <ChartTemporadaContainer></ChartTemporadaContainer>
      ) : null}
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Total Avisos
          </Overline>
          <OverlineDefaultData>
            {InstitutionData.total_warnings}
          </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Tempo de Resposta
          </Overline>
          <OverlineDefaultData>
            {InstitutionData.avg_response_time}
            <Overline variant="Default"> min</Overline>
          </OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
      <BadgesContainer>
        <CardDefaultSub2>
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              conquistas
            </Overline>
          </CardDefault>
          <Link to="/Conquistas">
            <Btn variant="4"> ver detalhes </Btn>
          </Link>
        </CardDefaultSub2>
        <SeasonBadges></SeasonBadges>
      </BadgesContainer>
    </Main>
  );
}

export default Temporada;
