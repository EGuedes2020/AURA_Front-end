import { Main } from "../../styles/Components/S_Main";
import { LeaderBoardHeader } from "../../styles/Components/LeaderBoardHeader";
import { H6 } from "../../styles/elements/H6";
import { LeaderBoardPodium } from "../../styles/Components/LeaderBoardPodium";

import LeaderBoardList from "../../Components/LeaderBoardList";

/* import CrownIcon from "../../Assets/Icons/Crown_icon";

import ProfilePic from "../../Assets/Img/Profile.png";
import LeftCrown from "../../Assets/Left_Crown";
import RightCrown from "../../Assets/Right_Crown";
import Sparkles from "../../Assets/Sparkles"; */

import React, { useLayoutEffect, useRef, useEffect, useState } from "react";

import axios from "axios";

import { useSelector, useDispatch } from "react-redux";

import { setInstituicoes } from "../../redux/InstituicoesStateReducer_Slice";

import FirstLB from "../../Components/FirstLB";
import SecondLB from "../../Components/SecondLB";
import ThirdLB from "../../Components/ThirdLB";

import {
  setFirstPlace,
  setSecondPlace,
  setThirdPlace,
} from "../../redux/PodiumStateReducer_Slice ";

function Leaderboard() {
  const dispatch = useDispatch();

  const fetch = async (url) => {
    return await axios.get(url);
  };

  const Instituicao = useSelector((state) => state.Instituicoes.instituicoes);

  const imgHeight = useSelector((state) => state.ImgHeight.imgHeight);

  const FirstPlace = useSelector((state) => state.Podium.firstPlace);

  const SecondPlace = useSelector((state) => state.Podium.secondPlace);

  const ThirdPlace = useSelector((state) => state.Podium.thirdPlace);

  useEffect(() => {
    fetch(`https://aura-app.onrender.com/api/institutions/`).then((res) => {
      dispatch(setInstituicoes(res.data));
      console.log(res.data);
    });
  }, [dispatch]);

  useEffect(() => {
    fetch(`https://aura-app.onrender.com/api/institutions/firstplace/`).then(
      (res) => {
        dispatch(setFirstPlace(res.data));
        console.log("test " + res.data);
      }
    );
  }, []);

  useEffect(() => {
    fetch(`https://aura-app.onrender.com/api/institutions/secondplace/`).then(
      (res) => {
        dispatch(setSecondPlace(res.data));
        console.log("test " + res.data);
      }
    );
  }, []);

  useEffect(() => {
    fetch(`https://aura-app.onrender.com/api/institutions/thirdplace/`).then(
      (res) => {
        dispatch(setThirdPlace(res.data));
        console.log("test " + res.data);
      }
    );
  }, []);

  return (
    <Main>
      <LeaderBoardHeader>
        <H6>Temporada 1</H6>
        <span>1º Fase</span>
      </LeaderBoardHeader>
      <LeaderBoardPodium imgSize={imgHeight}>
        <SecondLB
          id={SecondPlace.id}
          name={SecondPlace.name}
          ProfilePic={SecondPlace.avatar}
          score={SecondPlace.Score}
        ></SecondLB>
        <FirstLB
          id={FirstPlace.id}
          name={FirstPlace.name}
          ProfilePic={FirstPlace.avatar}
          score={FirstPlace.Score}
        ></FirstLB>
        <ThirdLB
          id={ThirdPlace.id}
          name={ThirdPlace.name}
          ProfilePic={ThirdPlace.avatar}
          score={ThirdPlace.Score}
        ></ThirdLB>
      </LeaderBoardPodium>
      <LeaderBoardList></LeaderBoardList>
    </Main>
  );
}

export default Leaderboard;
