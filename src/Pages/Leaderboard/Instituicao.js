import { Main } from "../../styles/Components/S_Main";
import { CardDefaultContainer } from "../../styles/Components/S_CardDefaultContainer";
import { CardDefault } from "../../styles/elements/CardDefault";
import { Overline } from "../../styles/elements/Overline";
import { OverlineDefaultData } from "../../styles/elements/OverlineDefaultData";
import { BadgesSectionContainerStyles } from "../../styles/Components/BadgesSectionContainerStyles";
import { BadgesSectionStyles } from "../../styles/Components/BadgesSectionStyles";

import InstitutionProfileInfo from "../../Components/InstitutionProfileInfo";

import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { setInstituicao } from "../../redux/InstituicoesStateReducer_Slice";

import { setMainBadges } from "../../redux/ConquistasStateReducer_Slice";

function Instituicao() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("id");

  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  useEffect(() => {
    fetch(`https://aura-app.onrender.com/api/inst/${userId}`).then((res) => {
      dispatch(setInstituicao(res.data));
      console.log(res.data.worker);
    });
  }, []);

  useEffect(() => {
    fetch(
      `https://aura-app.onrender.com/api/institutions/${userId}/4badges`
    ).then((res) => {
      dispatch(setMainBadges(res.data));
      console.log(res.data);
    });
  }, []);

  const Instituicao = useSelector((state) => state.Instituicoes.instituicao);

  const MainBadges = useSelector((state) => state.Conquistas.mainBadges);

  const avatarUrls = MainBadges.map((item) => item.avatar);

  return (
    <Main>
      <InstitutionProfileInfo
        ProfilePic={Instituicao.avatar}
        name={Instituicao.name}
        score={Instituicao.Score}
      ></InstitutionProfileInfo>
      <CardDefaultContainer variant="2">
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Total Avisos
          </Overline>
          <OverlineDefaultData>
            {Instituicao.total_warnings}
          </OverlineDefaultData>
        </CardDefault>
        <CardDefault>
          <Overline textTranform="Default" variant="Default">
            Tempo de Resposta
          </Overline>
          <OverlineDefaultData>
            {Instituicao.avg_response_time}
            <Overline variant="Default"> min</Overline>
          </OverlineDefaultData>
        </CardDefault>
      </CardDefaultContainer>
      <BadgesSectionContainerStyles>
        <Overline textTranform="Default" variant="badges">
          Conquistas
        </Overline>
        <BadgesSectionStyles variant="instituicao">
          {avatarUrls.map((url, index) => (
            <img key={index} src={url} alt="Badge" />
          ))}
        </BadgesSectionStyles>
      </BadgesSectionContainerStyles>
    </Main>
  );
}

export default Instituicao;
