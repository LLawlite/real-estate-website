import React from 'react';

//import link
import { Link } from 'react-router-dom';

// import css file
import '../styles/Header.css';
//import logo
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-nav">
        {/* {logo} */}
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        {/* {button} */}
        <div className="header-btn">
          <Link className="header-btn-login" to="">
            Log IN
          </Link>
          <Link className="header-btn-signup" to="">
            SignUp
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
