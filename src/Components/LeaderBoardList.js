import { LeaderBoardListContainer } from "../styles/Components/LeaderBoardListContainer";

import { useSelector } from "react-redux";

import LeaderBoardSingleLine from "./LeaderBoardSingleLine";

const LeaderBoardList = () => {
  const Instituicoes = useSelector((state) => state.Instituicoes.instituicoes);

  const InstituicoesList = Instituicoes.slice(3).map((item, index) => (
    <LeaderBoardSingleLine
      key={index}
      division={index + 4}
      id={item.id}
      profilePic={item.avatar}
      name={item.name}
      score={item.Score}
    />
  ));

  return (
    <LeaderBoardListContainer>{InstituicoesList}</LeaderBoardListContainer>
  );
};

export default LeaderBoardList;
