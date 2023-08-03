import React from 'react';

//import css file
import '../styles/Banner.css';

// import image
import Image from '../assets/img/house-banner.png';

// import components
import Search from '../components/Search';
const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-container-content">
          <h1>
            <span> Rent </span> Your Dream House With us
          </h1>
          <p>
            Sed ut perspiciatis, unde omnis iste natus error eius modi tempora
            Sed ut perspiciatis, unde omnis iste natus error eius modi tempora
            oriosam, nisi ut aliquid ex ea commodi consequatur? [D]Quis autem
            vel eum
          </p>
        </div>

        {/* {image} */}
        <div>
          <img src={Image} alt="Image" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
