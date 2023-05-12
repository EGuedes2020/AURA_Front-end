import { ChartStyles } from "../styles/Components/S_Chart";

import ChartBarContent from "./ChartBarContent";

const Chart = () => {
  return (
    <ChartStyles>
      <ChartBarContent></ChartBarContent>
      <ChartBarContent></ChartBarContent>
      <ChartBarContent></ChartBarContent>
    </ChartStyles>
  );
};

export default Chart;
