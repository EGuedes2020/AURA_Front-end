import { ListDispositivos } from "../styles/Components/ListDispositivos";

function RowListDispositivos(props) {
  return (
    <ListDispositivos>
      <span>
        {props.divisao}
        <span> Piso {props.piso}</span>
      </span>
      <p>{props.dispositivos}</p>
      <p>{props.total_avisos}</p>
    </ListDispositivos>
  );
}

export default RowListDispositivos;
