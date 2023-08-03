import React, { useContext } from 'react';

// import from materialUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

// Import Icons
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

// Import HouseContext
import { HouseContext } from './HouseContext';

//import Css file
import '../styles/CountryDropdown.css';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  const prices = [
    {
      value: 'Price (any)',
    },
    {
      value: '10000-30000',
    },
    {
      value: '30000-40000',
    },
    {
      value: '100000-130000',
    },
    {
      value: '130000-160000',
    },
    {
      value: '160000-190000',
    },
    {
      value: '190000-220000',
    },
  ];
  return (
    <Box className="dropdown">
      <AccountBalanceWalletOutlinedIcon sx={{ color: '#7f56d9' }} />
      <FormControl
        sx={{ m: 1, width: '100%', paddingBottom: '-1px' }}
        className="quantityRoot"
      >
        <Select
          value={price}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="selector"
          sx={{
            margin: '-10px',
          }}
        >
          {prices.map((price, index) => {
            return (
              <MenuItem value={price.value} key={index}>
                {price.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PriceRangeDropdown;
