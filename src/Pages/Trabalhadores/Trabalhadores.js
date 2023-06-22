import { Main } from "../../styles/Components/S_Main";
import { Btn } from "../../styles/elements/Button";
import { TrabalhadorLinkContainer } from "../../styles/Components/S_TrabalhadorLinkContainer";

import { Link } from "react-router-dom";

import SearchBar from "../../Components/SearchBar";
import TrabalhadorLink from "../../Components/TrabalhadorLink";

import Plus_icon from "../../Assets/Icons/Plus_icon.svg";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import { setTrabalhadores } from "../../redux/TrabalhadoresStateReducer_Slice";

function Trabalhadores() {
  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  const InstitutionId = useSelector((state) => state.Login.Institution_id);

  const WorkerId = useSelector((state) => state.Login.WorkerId);

  const pesquisaTrabalhadores = useSelector(
    (state) => state.Trabalhadores.pesquisaTrabalhadores
  );

  const trabalhadores = useSelector(
    (state) => state.Trabalhadores.trabalhadores
  );

  const getFilteredTrabalhadores = (pesquisaTrabalhadores, Trabalhadores) => {
    if (!pesquisaTrabalhadores) {
      return Trabalhadores;
    }
    return Trabalhadores.filter((info) =>
      info.name.toLowerCase().includes(pesquisaTrabalhadores)
    );
  };

  const filteredTrabalhadores = getFilteredTrabalhadores(
    pesquisaTrabalhadores,
    trabalhadores
  );

  useEffect(() => {
    fetch(
      `https://aura-app.onrender.com/api/institutions/${InstitutionId}/workers/`
    ).then((res) => {
      dispatch(setTrabalhadores(res.data));
      //console.log(res.data);
      //console.log(res.data.length);
    });
  }, []);

  const Trabalhadores = filteredTrabalhadores
    .filter((item) => item.id != WorkerId)
    .map((item, index) => (
      <TrabalhadorLink
        key={index}
        id={item.id}
        profilePic={item.avatar}
        name={item.name}
        numLigados={item.devices_on}
      />
    ));

  return (
    <>
      <Link to="/ConvidarTrabalhador">
        <Btn variant="2">
          <img src={Plus_icon} alt="Plus_icon" /> Convidar
        </Btn>
      </Link>
      <Main>
        <SearchBar></SearchBar>
        <TrabalhadorLinkContainer>{Trabalhadores}</TrabalhadorLinkContainer>
      </Main>
    </>
  );
}

export default Trabalhadores;
