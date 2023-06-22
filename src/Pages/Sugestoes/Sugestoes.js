import { Main } from "../../styles/Components/S_Main";
import { Btn } from "../../styles/elements/Button";

import { Link } from "react-router-dom";

import CardSugestoes from "../../Components/CardSugestoes";
import Plus_icon from "../../Assets/Icons/Plus_icon.svg";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";

import { setSugestoesData } from "../../redux/SugestoesStateReducer_Slice";

function Sugestoes() {
  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  const InstitutionId = useSelector((state) => state.Login.Institution_id);

  const SugestoesData = useSelector((state) => state.Sugestoes.sugestoesData);

  useEffect(() => {
    fetch(
      `https://aura-app.onrender.com/api/institutions/${InstitutionId}/suggestions`
    ).then((res) => {
      dispatch(setSugestoesData(res.data));
      console.log(res.data);
    });
  }, [dispatch]);

  const SugestoesCard = SugestoesData.map((item, index) => (
    <CardSugestoes
      key={index}
      id={item.id}
      title={item.title}
      description={item.description}
      date={item.date_created}
      status={item.status}
      votes={item.number_of_votes}
    />
  ));

  // SugestoesData para fazer o mapping

  return (
    <Main>
      {SugestoesCard}
      <Link to="/CriarSugestao">
        <Btn variant="2">
          <img src={Plus_icon} alt="Plus_icon" /> Adicionar
        </Btn>
      </Link>
    </Main>
  );
}

export default Sugestoes;
