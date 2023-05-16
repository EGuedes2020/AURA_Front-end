import { SearchBarStyles } from "../styles/elements/SearchBar";
import { SearchBarContainer } from "../styles/Components/S_SearchBarContainer";

import Search_icon from "../Assets/Icons/Search_icon.svg";

{
  /* <Link to="/Detalhes">
      <Btn_admin_colaboradores_list onClick={() => details()}>
        <img src={foto_colaboradores()} alt={props.nome} />
        <span>
          {props.nome}
          <p> {props.area} </p>
        </span>
      </Btn_admin_colaboradores_list>
    </Link> */
}

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchBarStyles placeholder="Procurar"></SearchBarStyles>
      <button>
        <img src={Search_icon} alt="Search_icon" />
      </button>
    </SearchBarContainer>
  );
};

export default SearchBar;
