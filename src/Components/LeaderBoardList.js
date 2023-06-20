import { LeaderBoardListContainer } from "../styles/Components/LeaderBoardListContainer";

import { Link } from "react-router-dom";

import ProfilePic from "../Assets/Img/Profile.png";

const LeaderBoardList = () => {
  return (
    <LeaderBoardListContainer>
      <span>4º</span>
      <Link to="/Instituicao">
        <img src={ProfilePic} alt="fotografia_de_utilizador" />
        <div>
          <p>Santa Casa da Misericórdia</p>
          <span>3400</span>
        </div>
      </Link>
      <span>5º</span>
      <Link to="/Instituicao">
        <img src={ProfilePic} alt="fotografia_de_utilizador" />
        <div>
          <p>Santa Casa da Misericórdia</p>
          <span>3400</span>
        </div>
      </Link>
    </LeaderBoardListContainer>
  );
};

export default LeaderBoardList;
