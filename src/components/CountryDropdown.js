import React, { useContext } from 'react';

// import from materialUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

// Import Icons
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// Import HouseContext
import { HouseContext } from './HouseContext';

//import Css file
import '../styles/CountryDropdown.css';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <Box className="dropdown">
      <LocationOnOutlinedIcon sx={{ color: '#7f56d9' }} />
      <FormControl
        sx={{ m: 1, width: '100%', paddingBottom: '-1px' }}
        className="quantityRoot"
      >
        <Select
          value={country}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="selector"
          sx={{
            margin: '-10px',
          }}
        >
          {countries.map((country, index) => {
            return (
              <MenuItem value={country} key={index}>
                {country}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CountryDropdown;
