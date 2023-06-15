import { UserProfileInfoStyles } from "../styles/Components/S_UserProfileInfo";
import { H6 } from "../styles/elements/H6";
import ProfilePic from "../Assets/Img/Profile.png";

const UserProfileInfo = () => {
  return (
    <UserProfileInfoStyles>
      <img src={ProfilePic} alt="fotografia_de_utilizador" />
      <H6 align="center"> David Silva </H6>
      <span>davidsilva@gmail.com</span>
    </UserProfileInfoStyles>
  );
};

export default UserProfileInfo;
