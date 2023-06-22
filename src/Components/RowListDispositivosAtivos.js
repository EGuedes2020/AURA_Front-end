import { ListDispositivos } from "../styles/Components/ListDispositivos";

function RowListDispositivosAtivos(props) {
  return (
    <ListDispositivos>
      <span>{props.divisao}</span>
      <p>
        {props.tempoAviso}
        <span>{props.detalhes === "true" ? "min" : ""}</span>
      </p>
      <p>{props.numLigados}</p>
    </ListDispositivos>
  );
}

export default RowListDispositivosAtivos;
