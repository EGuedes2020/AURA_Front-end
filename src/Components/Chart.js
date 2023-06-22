import { ChartStyles } from "../styles/Components/S_Chart";

import ChartBarContent from "./ChartBarContent";

import { useSelector } from "react-redux";

const Chart = () => {
  const ChartData = useSelector((state) => state.Temporada.chartData);

  const chartValues = ChartData.map((item) => item.cost_energy);

  const MaiorValor = Math.max(...chartValues);
  const MenorValor = Math.min(...chartValues) * 0.9;

  const ChartBar = ChartData.map((item, index) => (
    <ChartBarContent
      key={index}
      maxValue={MaiorValor}
      minValue={MenorValor}
      value={item.cost_energy}
      mes={item.month}
    />
  ));

  return <ChartStyles>{ChartBar}</ChartStyles>;
};

export default Chart;
