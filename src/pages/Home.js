import React from 'react';

// import components
import HouseList from '../components/HouseList';
import Banner from '../components/Banner';
const Home = () => {
  return (
    <div className="container">
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
