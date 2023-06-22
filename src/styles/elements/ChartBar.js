import { ChartBarStyles } from "../Components/S_ChartBar";

const ChartBar = (props) => {
  return (
    <>
      <ChartBarStyles percentage={props.barra}></ChartBarStyles>
    </>
  );
};

export default ChartBar;
