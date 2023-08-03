import React, { useContext } from 'react';

// import css file
import '../styles/Houselist.css';
// import  context
import { HouseContext } from './HouseContext';

//import components
import House from './House';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// import link
import { Link } from 'react-router-dom';

// import icons

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  if (loading) {
    return (
      <div className="loader">
        <CircularProgress sx={{ color: '#7f56d9' }} />
      </div>
    );
  }
  console.log(houses, houses.length, 'arr');
  if (houses.length < 1) {
    return (
      <div className="no-data-found">
        <span> Sorry, </span> no data found
      </div>
    );
  }

  return (
    <section>
      <div>
        <div className="houselist-items">
          {houses.map((house, index) => {
            return (
              <Link
                to={`/property/${house.id}`}
                key={house.id}
                className="Link"
              >
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
