import { Main } from "../../styles/Components/S_Main";
import { LeaderBoardHeader } from "../../styles/Components/LeaderBoardHeader";
import { H6 } from "../../styles/elements/H6";
import { LeaderBoardPodium } from "../../styles/Components/LeaderBoardPodium";

import LeaderBoardList from "../../Components/LeaderBoardList";

import CrownIcon from "../../Assets/Icons/Crown_icon";

import ProfilePic from "../../Assets/Img/Profile.png";
import LeftCrown from "../../Assets/Left_Crown";
import RightCrown from "../../Assets/Right_Crown";
import Sparkles from "../../Assets/Sparkles";

import React, { useLayoutEffect, useRef, useEffect, useState } from "react";

function Leaderboard() {
  const ref = useRef(null);

  const [imgHeight, setImgHeight] = useState(0);

  useLayoutEffect(() => {
    setImgHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      setImgHeight(ref.current.clientHeight);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Main>
      <LeaderBoardHeader>
        <H6>Temporada 1</H6>
        <span>1º Fase</span>
      </LeaderBoardHeader>
      <LeaderBoardPodium imgSize={imgHeight}>
        <div>
          <span>2º</span>
          <img src={ProfilePic} alt="fotografia_de_utilizador" />
          <span>4581</span>
          <span>Carmo</span>
        </div>
        <div>
          <span>
            <CrownIcon />
          </span>
          <div>
            <LeftCrown />
            <RightCrown />
            <Sparkles />
            <img ref={ref} src={ProfilePic} alt="fotografia_de_utilizador" />
          </div>
          <span>23454</span>
          <span>Oliveira do Bairro</span>
        </div>
        <div>
          <span>3º</span>
          <img src={ProfilePic} alt="fotografia_de_utilizador" />
          <span>3400</span>
          <span>Ponte de Vagos</span>
        </div>
      </LeaderBoardPodium>
      <LeaderBoardList></LeaderBoardList>
    </Main>
  );
}

export default Leaderboard;
