import React from 'react';
//import css file
import '../styles/House.css';

//import icons
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import ImageAspectRatioOutlinedIcon from '@mui/icons-material/ImageAspectRatioOutlined';

const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="house-card-container draw-border">
      <img src={image} alt="" />
      <div className="house-card-container-content">
        <div className="house-card-type">{type}</div>
        <div className="house-card-country">{country}</div>
      </div>
      <div className="house-card-address">{address}</div>
      <div className="house-card-info">
        <div className="house-card-info-items">
          <KingBedOutlinedIcon />
          <div>{bedrooms}</div>
        </div>
        <div className="house-card-info-items">
          <BathroomOutlinedIcon />
          <div>{bathrooms}</div>
        </div>
        <div className="house-card-info-items">
          <ImageAspectRatioOutlinedIcon />
          <div>{surface}</div>
        </div>
      </div>
      <div className="house-card-price">{price}</div>
    </div>
  );
};

export default House;
