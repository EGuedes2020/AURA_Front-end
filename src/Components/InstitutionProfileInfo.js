import { InstitutionProfileInfoStyles } from "../styles/Components/S_InstitutionProfileInfo";
import { H6 } from "../styles/elements/H6";

import ProfilePic from "../Assets/Img/Profile.png";
import LeftCrown from "../Assets/Left_Crown";
import RightCrown from "../Assets/Right_Crown";

const InstitutionProfileInfo = (props) => {
  return (
    <InstitutionProfileInfoStyles>
      <span> 3º </span>
      <div>
        <LeftCrown />
        <RightCrown />
        <img src={props.ProfilePic} alt="fotografia_de_utilizador" />
      </div>
      <H6 align="center"> {props.name} </H6>
      <span>{props.score}</span>
    </InstitutionProfileInfoStyles>
  );
};

export default InstitutionProfileInfo;
