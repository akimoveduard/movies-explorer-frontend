import React from 'react';
import { Link, useLocation, useRouteMatch } from "react-router-dom";

import { PATH_EXEPTIONS } from '../../utils/constants';

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
  const isHeaderShown = !(useRouteMatch(PATH_EXEPTIONS.header));

  return (
    <>
      {isHeaderShown &&
        <header className={`header${location==='/' && " header_theme_dark"}`}>
          <div className="header__content">
          {(location !== '/') 
            ? (
            <Link to="/" className="header__logo-link">
              <img className="header__logo" src={logo} alt="Movies Explorer" />
            </Link>
            ) : (
            <img className="logo" src={logo} alt="Movies Explorer" />
          )}
          {isLoggedIn && location !== '/'
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
      }
    </>
  );
}

export default Header;
