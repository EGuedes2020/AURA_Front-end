import { Link } from "react-router-dom";
import { TrabalhadoresLinkStyles } from "../styles/elements/TrabalhadoresLinkStyles";

import ProfilePic from "../Assets/Img/Profile.png";

const TrabalhadorLink = () => {
  return (
    <>
      <Link to="/Trabalhador">
        <TrabalhadoresLinkStyles>
          <img src={ProfilePic} alt="fotografia_de_utilizador" />
          <span> David Silva </span>
        </TrabalhadoresLinkStyles>
      </Link>
    </>
  );
};

export default TrabalhadorLink;
