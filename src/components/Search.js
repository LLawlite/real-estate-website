import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import css file
import '../styles/Search.css';

// import componentes
import CountryDropDown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';

// import icons
import { RiSearch2Line } from 'react-icons/ri';
import { blue } from '@mui/material/colors';
import { HouseContext } from './HouseContext';

const Search = () => {
  const { houses, handleClick } = useContext(HouseContext);
  // console.log(houses);
  return (
    <div className="search-container">
      <CountryDropDown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button
        onClick={() => {
          handleClick();
        }}
        className="search-container-btn"
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
