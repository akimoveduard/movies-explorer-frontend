import React from 'react';
import { Link, useLocation } from "react-router-dom";

import "./Header.css";

import Navigation from '../Navigation/Navigation';
import BurgerButton from '../BurgerButton/BurgerButton';
import RegAuthLinks from '../RegAuthLinks/RegAuthLinks';

import logo from '../../images/logo.svg';

function Header({
  isLoggedIn,
  onButtonClick
}) {  

  const location = useLocation().pathname;

  console.log(isLoggedIn)

  return (
    <header className={`header${!isLoggedIn ? " header_theme_dark" : ""}`}>
      <div className="header__content">
        {(location !== '/') ? (
          <Link to="/" className="header__logo-link">
            <img className="header__logo" src={logo} alt="Movies Explorer" />
          </Link>
        ) : (
          <img className="logo" src={logo} alt="Movies Explorer" />
        )}
        {isLoggedIn 
          ? <>
              <Navigation />
              <BurgerButton
                onButtonClick={ onButtonClick }
              />
            </>
          : <RegAuthLinks />
        }
      </div>
    </header>
  );
}

export default Header;
