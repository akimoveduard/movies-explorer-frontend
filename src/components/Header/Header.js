import React from 'react';
import { Link, useLocation } from "react-router-dom";

import "./Header.css";

import Navigation from '../Navigation/Navigation';
import RegAuthLinks from '../RegAuthLinks/RegAuthLinks';

import logo from '../../images/logo.svg';

function Header({ isLogged }) {  

  const location = useLocation().pathname;

  return (
    <header className={`header${!isLogged ? " header_theme_dark" : ""}`}>
      <div className="header__content">
        {(location !== '/') ? (
          <Link to="/" className="header__logo-link">
            <img className="logo" src={logo} alt="Movies Explorer" />
          </Link>
        ) : (
          <img className="logo" src={logo} alt="Movies Explorer" />
        )}
        {isLogged ? <Navigation /> : <RegAuthLinks />}
      </div>
    </header>
  );
}

export default Header;
