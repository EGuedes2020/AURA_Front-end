import { CharBarContentStyles } from "../styles/Components/S_CharBarContent";

import ChartBar from "../styles/elements/ChartBar";

const ChartBarContent = (props) => {
  const { value, maxValue, minValue } = props;

  const barra = ((value - minValue) / (maxValue - minValue)) * 100;

  return (
    <CharBarContentStyles percentage={value}>
      <p>{props.value} €</p>
      <ChartBar barra={barra}></ChartBar>
      <span>{props.mes}</span>
    </CharBarContentStyles>
  );
};

export default ChartBarContent;
