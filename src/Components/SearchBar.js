import { SearchBarStyles } from "../styles/elements/SearchBar";
import { SearchBarContainer } from "../styles/Components/S_SearchBarContainer";

import Search_icon from "../Assets/Icons/Search_icon.svg";

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
