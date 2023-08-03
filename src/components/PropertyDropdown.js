import React, { useContext } from 'react';

// import from materialUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

// Import Icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// Import HouseContext
import { HouseContext } from './HouseContext';

//import Css file
import '../styles/CountryDropdown.css';

const PropertyDropdown = () => {
  const { property, properties, setProperty } = useContext(HouseContext);

  const handleChange = (event) => {
    setProperty(event.target.value);
  };
  return (
    <Box className="dropdown">
      <HomeOutlinedIcon sx={{ color: '#7f56d9' }} />
      <FormControl
        sx={{ m: 1, width: '100%', paddingBottom: '-1px' }}
        className="quantityRoot"
      >
        <Select
          value={property}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="selector"
          sx={{
            margin: '-10px',
          }}
        >
          {properties.map((property, index) => {
            return (
              <MenuItem value={property} key={index}>
                {property}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PropertyDropdown;
