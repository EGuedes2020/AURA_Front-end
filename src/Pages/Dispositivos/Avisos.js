import { Main } from "../../styles/Components/S_Main";
import { CardDefault } from "../../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../../styles/elements/CardDefaultSub2";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import {
  ListDispositivosContainer,
  ListDispositivos,
} from "../../styles/Components/ListDispositivos";

import RowListDispositivosAtivos from "../../Components/RowListDispositivosAtivos";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import {
  setAvisosAtivos,
  setTotalAvisosAtivos,
} from "../../redux/AvisosAtivosStateReducer_Slice";

function Avisos() {
  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  const InstitutionId = useSelector((state) => state.Login.Institution_id);

  useEffect(() => {
    fetch(
      `https://aura-app.onrender.com/api/active_warnings/institution/${InstitutionId}`
    ).then((res) => {
      dispatch(setAvisosAtivos(res.data));
      dispatch(setTotalAvisosAtivos(res.data.length));
      //console.log(res.data);
      //console.log(res.data.length);
    });
  }, []);

  const DispositivosAtivos = useSelector(
    (state) => state.AvisosAtivos.avisosAtivos
  ).map((item, index) => (
    <RowListDispositivosAtivos
      detalhes={"true"}
      key={index}
      divisao={item.room}
      tempoAviso={item.warning_time}
      numLigados={item.devices_on}
    />
  ));

  const TotalAvisos = useSelector(
    (state) => state.AvisosAtivos.totalAvisosAtivos
  );

  return (
    <Main>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2 variant="1">
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              Avisos Ativos
            </Overline>
            <OverlineDefaultData> {TotalAvisos} </OverlineDefaultData>
          </CardDefault>
        </CardDefaultSub2>
      </CardDefaultContainer>
      <ListDispositivosContainer>
        <ListDispositivos variant="Header">
          <span>Divisão</span>
          <span>Tempo Aviso</span>
          <span>Nº Ligados</span>
        </ListDispositivos>
        {DispositivosAtivos}
      </ListDispositivosContainer>
    </Main>
  );
}

export default Avisos;
