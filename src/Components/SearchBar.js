import { SearchBarStyles } from "../styles/elements/SearchBar";
import { SearchBarContainer } from "../styles/Components/S_SearchBarContainer";

import Search_icon from "../Assets/Icons/Search_icon.svg";
import { useSelector, useDispatch } from "react-redux";
import { setPesquisaTrabalhadores } from "../redux/TrabalhadoresStateReducer_Slice";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();

  //const [pesquisaTrabalhadores, setPesquisaTrabalhadores] = useState("");
  /* const trabalhadores = useSelector(
    (state) => state.Trabalhadores.trabalhadores
  ); */

  /*  const getFilteredTrabalhadores = (pesquisaTrabalhadores, Trabalhadores) => {
    if (!pesquisaTrabalhadores) {
      return Trabalhadores;
    }
    return Trabalhadores.filter((info) =>
      info.name.toLowerCase().includes(pesquisaTrabalhadores)
    );
  }; */

  /* const filteredTrabalhadores = getFilteredTrabalhadores(
    pesquisaTrabalhadores,
    trabalhadores
  ); */

  /*  useEffect(() => {
    dispatch(setTrabalhadoresFiltrados(filteredTrabalhadores));
    console.log("fez dispatch agora");
  }, [filteredTrabalhadores]);
 */
  return (
    <SearchBarContainer>
      <SearchBarStyles
        placeholder="Procurar"
        onChange={(e) =>
          dispatch(setPesquisaTrabalhadores(e.target.value.toLowerCase()))
        }
      ></SearchBarStyles>
      <button>
        <img src={Search_icon} alt="Search_icon" />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
