import { CharBarContentStyles } from "../styles/Components/S_CharBarContent";

import ChartBar from "../styles/elements/ChartBar";

const ChartBarContent = () => {
  return (
    <CharBarContentStyles>
      <p>31.283 €</p>
      <ChartBar></ChartBar>
      <span>Março</span>
    </CharBarContentStyles>
  );
};

export default ChartBarContent;
