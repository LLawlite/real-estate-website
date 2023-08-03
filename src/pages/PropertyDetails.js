import React from 'react';

// import data
import { housesData } from '../data';

// import use params
import { useParams } from 'react-router-dom';

// import icons
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined';
import BathroomOutlinedIcon from '@mui/icons-material/BathroomOutlined';
import ImageAspectRatioOutlinedIcon from '@mui/icons-material/ImageAspectRatioOutlined';

//import css file
import '../styles/PropertyDetails.css';
const PropertyDetails = () => {
  const { id } = useParams();

  const house = housesData.find((house) => {
    return house.id === parseInt(id);
  });
  console.log(house);

  return (
    <div className="property-details-container">
      <div className="property-details-top">
        <div className="property-details-address">
          <div>{house.name}</div>
          <div>{house.address}</div>
        </div>
        <div className="property-details-loc-and-type">
          <div>{house.country}</div>
          <div>{house.type}</div>
        </div>
      </div>
      <img className="property-details-img" src={house.image} />
      <div className="property-details-bottom">
        <div className="house-card-info">
          <div className="house-card-info-items">
            <KingBedOutlinedIcon />
            <div>{house.bedrooms}</div>
          </div>
          <div className="house-card-info-items">
            <BathroomOutlinedIcon />
            <div>{house.bathrooms}</div>
          </div>
          <div className="house-card-info-items">
            <ImageAspectRatioOutlinedIcon />
            <div>{house.surface}</div>
          </div>
        </div>
        <div className="property-price">$ {house.price}</div>
      </div>
      <div className="property-description">{house.description}</div>
    </div>
  );
};

export default PropertyDetails;
