import React from "react";

import "../../Styles/fonts.css";
import { SearchContainer, SearchIcon, SearchInput } from "./style";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchIcon className="icon-search" />
      <SearchInput type="text" placeholder="Search" />
    </SearchContainer>
  );
};

export { SearchBar };
