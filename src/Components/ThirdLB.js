import ProfilePic from "../Assets/Img/Profile.png";

import { Link } from "react-router-dom";

const ThirdLB = (props) => {
  return (
    <div>
      <span>3º</span>
      <Link to={`/Instituicao?id=${props.id}`}>
        <img src={props.ProfilePic} alt="fotografia_de_utilizador" />
      </Link>
      <span>{props.score}</span>
      <span>{props.name}</span>
    </div>
  );
};

export default ThirdLB;
