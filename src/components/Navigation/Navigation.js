import React from 'react';

import { NavLink } from 'react-router-dom';

import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li className="nav__links-item">
          <NavLink
            exact to="/"
            className="nav__link nav__link_main"
            >
            Главная
          </NavLink>
        </li>
        <li className="nav__links-item">
          <NavLink
            exact to="/movies"
            className="nav__link nav__link_movies"
          >
          Фильмы
          </NavLink>
        </li>
        <li className="nav__links-item">
          <NavLink
            exact to="/saved-movies"
            className="nav__link nav__link_saved-movies"
          >
            Сохраненные фильмы
          </NavLink>          
        </li>
      </ul>
      <NavLink
        exact to="/profile"
        className="nav__link nav__link_profile"
      >
        Аккаунт
      </NavLink>
    </nav>
  );
};

export default Navigation;
