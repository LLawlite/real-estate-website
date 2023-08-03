import React, { createContext, useEffect, useState } from 'react';

// import houseData
import { housesData } from '../data';

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);

  const [price, setPrice] = useState('Price (any)');

  const [loading, setLoading] = useState(false);

  // Return all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // Remoce duplicate countries
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  // Return all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // Remoce duplicate Properties
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set Properties state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    //set loading
    setLoading(true);
    // Make a function to check if the string consiste of (any)

    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // getting the value of price range
    const [lowerprice, upperprice] = price.split('-');
    const minPrice = parseInt(lowerprice);
    const maxPrice = parseInt(upperprice);

    // Filter the houses
    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // no selection
      if (isDefault(country) && isDefault(price) && isDefault(property)) {
        return house;
      }

      // country is selected
      if (!isDefault(country) && isDefault(price) && isDefault(property)) {
        return house.country === country;
      }

      // price is selected
      if (isDefault(country) && !isDefault(price) && isDefault(property)) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      // property is selected
      if (isDefault(country) && isDefault(price) && !isDefault(property)) {
        return house.type === property;
      }

      // country & price is selected
      if (!isDefault(country) && !isDefault(price) && isDefault(property)) {
        return (
          house.country === country &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        );
      }

      // country & property is selected
      if (!isDefault(country) && isDefault(price) && !isDefault(property)) {
        return house.country === country && house.type === property;
      }

      // price & property is selected
      if (isDefault(country) && !isDefault(price) && !isDefault(property)) {
        return (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.type === property
        );
      }

      // all are selected
      if (
        house.country === country &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        house.type === property
      ) {
        return house;
      }
    });

    setTimeout(() => {
      filteredHouses.length > 0 ? setHouses(filteredHouses) : setHouses([]);
      setLoading(false);
    }, 1000);
  };
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        setCountries,
        property,
        setProperty,
        properties,
        setProperties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
