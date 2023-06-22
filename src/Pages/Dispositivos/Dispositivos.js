import { Main } from "../../styles/Components/S_Main";
import { CardDefault } from "../../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../../styles/elements/CardDefaultSub2";
import { Btn } from "../../styles/elements/Button";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import {
  ListDispositivosContainer,
  ListDispositivos,
} from "../../styles/Components/ListDispositivos";

import { Link } from "react-router-dom";

import RowListDispositivos from "../../Components/RowListDispositivos";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import {
  setAvisosAtivos,
  setTotalAvisosAtivos,
} from "../../redux/AvisosAtivosStateReducer_Slice";

import {
  setDivisoesNumero,
  setDispositivos,
  setDispositivosNumero,
} from "../../redux/DispositivosStateReducer_Slice";

// | Variants
// - CardDefaultContainer: 1 || 2 (containers)
// - CardDefault: Sub || Default (colocar "Sub" se tiver um "CardDefaultSub2" antes)
// - Overline: Default || Sugestoes (styles)
// - Btn: 1 || 2 || 3 || 4 (1 para o default, 2 para a versão default com text-transform none, 3 para a versão width 100%, 4 para a versão branca)

function Dispositivos() {
  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  const InstitutionId = useSelector((state) => state.Login.Institution_id);

  const TotalAvisos = useSelector(
    (state) => state.AvisosAtivos.totalAvisosAtivos
  );

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

  useEffect(() => {
    fetch(
      `https://aura-app.onrender.com/api/institutions/rooms/${InstitutionId}`
    ).then((res) => {
      dispatch(setDivisoesNumero(res.data.rooms.length));
      dispatch(setDispositivos(res.data.rooms));
      dispatch(setDispositivosNumero(res.data.sumOfDevices));
    });
  }, []);

  const DivisoesNumero = useSelector(
    (state) => state.Dispositivos.divisoesNumero
  );

  const DispositivosData = useSelector(
    (state) => state.Dispositivos.dispositivos
  );

  const DispositivosNumero = useSelector(
    (state) => state.Dispositivos.dispositivosNumero
  );

  const Dispositivos = DispositivosData.map((item, index) => (
    <RowListDispositivos
      key={index}
      divisao={item.room_number}
      dispositivos={item.devices_per_division}
      total_avisos={item.total_warnings}
    />
  ));

  return (
    <Main>
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Dispositivos
          </Overline>
          <OverlineDefaultData> {DispositivosNumero} </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Divisões
          </Overline>
          <OverlineDefaultData> {DivisoesNumero} </OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
      <CardDefaultContainer variant="1">
        <CardDefaultSub2>
          <CardDefault variant="Sub">
            <Overline textTranform="Default" variant="Default">
              Avisos Ativos
            </Overline>
            <OverlineDefaultData> {TotalAvisos} </OverlineDefaultData>
          </CardDefault>
          <Link to="/AvisosAtivos">
            <Btn variant="1"> ver detalhes </Btn>
          </Link>
        </CardDefaultSub2>
      </CardDefaultContainer>
      <ListDispositivosContainer>
        <ListDispositivos variant="Header">
          <span>Divisão</span>
          <span>Dispositivos</span>
          <span>Total Avisos Temporada</span>
        </ListDispositivos>
        {Dispositivos}
      </ListDispositivosContainer>
    </Main>
  );
}

export default Dispositivos;
