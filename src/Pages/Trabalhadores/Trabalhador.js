import { Main } from "../../styles/Components/S_Main";
import { CardDefault } from "../../styles/elements/CardDefault";
import { CardDefaultSub2 } from "../../styles/elements/CardDefaultSub2";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";

import UserProfileInfo from "../../Components/UserProfileInfo";

import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { setTrabalhador } from "../../redux/TrabalhadoresStateReducer_Slice";

function Trabalhador() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");

  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  useEffect(() => {
    fetch(`https://aura-app.onrender.com/api/workers/${userId}`).then((res) => {
      dispatch(setTrabalhador(res.data.worker));
      console.log(res.data.worker);
    });
  }, []);

  const Trabalhador = useSelector((state) => state.Trabalhadores.trabalhador);

  return (
    <Main>
      <UserProfileInfo
        name={Trabalhador.name}
        email={Trabalhador.email}
        img={Trabalhador.avatar}
      ></UserProfileInfo>
      <CardDefaultSub2 variant="1">
        <CardDefault variant="Sub">
          <Overline textTranform="Default" variant="Default">
            Nome
          </Overline>
          <OverlineDefaultData>{Trabalhador.name}</OverlineDefaultData>
        </CardDefault>
      </CardDefaultSub2>
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Número de telemóvel
          </Overline>
          <OverlineDefaultData>
            {" "}
            {Trabalhador.phone_number}{" "}
          </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            data de nascimento
          </Overline>
          <OverlineDefaultData>{Trabalhador.birth_date}</OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
      <CardDefaultSub2 variant="1">
        <CardDefault variant="Sub">
          <Overline textTranform="Default" variant="Default">
            Morada
          </Overline>
          <OverlineDefaultData>{Trabalhador.address}</OverlineDefaultData>
        </CardDefault>
      </CardDefaultSub2>
    </Main>
  );
}

export default Trabalhador;
