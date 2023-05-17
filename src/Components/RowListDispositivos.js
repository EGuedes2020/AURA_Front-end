import { ListDispositivos } from "../styles/Components/ListDispositivos";

function RowListDispositivos(props) {
  return (
    <ListDispositivos>
      <span>
        {props.divisao}
        <p> Piso {props.piso}</p>
      </span>
      <p>
        {props.dispositivos}
        <span>{props.detalhes === "true" ? "min" : ""}</span>
      </p>
      <p>{props.total_avisos}</p>
    </ListDispositivos>
  );
}

export default RowListDispositivos;
