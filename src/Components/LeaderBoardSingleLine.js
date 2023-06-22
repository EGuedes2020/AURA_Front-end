import { Link } from "react-router-dom";

const LeaderBoardSingleLine = (props) => {
  return (
    <>
      <span>{props.division}</span>
      <Link to={`/Instituicao?id=${props.id}`}>
        <img src={props.profilePic} alt="fotografia_de_utilizador" />
        <div>
          <p>{props.name}</p>
          <span>{props.score}</span>
        </div>
      </Link>
    </>
  );
};

export default LeaderBoardSingleLine;
