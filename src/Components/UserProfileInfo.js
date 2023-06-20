import { UserProfileInfoStyles } from "../styles/Components/S_UserProfileInfo";
import { H6 } from "../styles/elements/H6";
import ProfilePic from "../Assets/Img/Profile.png";

const UserProfileInfo = (props) => {
  return (
    <UserProfileInfoStyles>
      <img src={ProfilePic} alt="fotografia_de_utilizador" />
      <H6 align="center"> {props.name} </H6>
      <span>{props.email}</span>
    </UserProfileInfoStyles>
  );
};

export default UserProfileInfo;
