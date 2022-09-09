import React from 'react';

import "./Header.css";

import Navigation from '../Navigation/Navigation';
import RegAuthLinks from '../RegAuthLinks/RegAuthLinks';

import logo from '../../images/logo.svg';

function Header({ isLogged }) {  

  return (
    <header className={`header${!isLogged ? " header_theme_dark" : ""}`}>
      <div className="header__content">
        <img className="logo" src={logo} alt="Movies Explorer" />
        {isLogged ? <Navigation /> : <RegAuthLinks />}
      </div>
    </header>
  );
}

export default Header;
