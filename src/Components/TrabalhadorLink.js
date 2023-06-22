import { Link } from "react-router-dom";
import { TrabalhadoresLinkStyles } from "../styles/elements/TrabalhadoresLinkStyles";

//import ProfilePic from "../Assets/Img/Profile.png";

const TrabalhadorLink = (props) => {
  return (
    <>
      <Link to={`/Trabalhador?id=${props.id}`}>
        <TrabalhadoresLinkStyles>
          <img src={props.profilePic} alt="fotografia_de_utilizador" />
          <span> {props.name} </span>
        </TrabalhadoresLinkStyles>
      </Link>
    </>
  );
};

export default TrabalhadorLink;
