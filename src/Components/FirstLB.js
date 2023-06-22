import LeftCrown from "../Assets/Left_Crown";
import RightCrown from "../Assets/Right_Crown";
import Sparkles from "../Assets/Sparkles";
import CrownIcon from "../Assets/Icons/Crown_icon";

import { Link } from "react-router-dom";

import React, { useLayoutEffect, useRef, useEffect, useState } from "react";

import ProfilePic from "../Assets/Img/Profile.png";
import { useSelector, useDispatch } from "react-redux";

import { setImgHeight } from "../redux/ImgHeightStateReducer_Slice";

const FirstLB = (props) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const imgHeight = useSelector((state) => state.ImgHeight.imgHeight);

  useLayoutEffect(() => {
    dispatch(setImgHeight(ref.current.clientHeight));
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      dispatch(setImgHeight(ref.current.clientHeight));
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <span>
        <CrownIcon />
      </span>
      <div>
        <Link to={`/Instituicao?id=${props.id}`}>
          <LeftCrown />
          <RightCrown />
          <Sparkles />
          <img
            ref={ref}
            src={props.ProfilePic}
            alt="fotografia_de_utilizador"
          />
        </Link>
      </div>
      <span>{props.score}</span>
      <span>{props.name}</span>
    </div>
  );
};

export default FirstLB;
