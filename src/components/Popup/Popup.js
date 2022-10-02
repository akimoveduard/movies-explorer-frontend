import React from "react";
import { NavLink } from "react-router-dom";

import './Popup.css';

function Popup({ isOpened, onButtonClick }) {

  return(
    <section className={`popup ${isOpened ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          onClick={ onButtonClick }
        />
        <ul className="popup-nav__links">
          <li>
            <NavLink
              to="/"
              exact={true}
              className="popup-nav__link"
              activeClassName="popup-nav__link_active"
              onClick={ onButtonClick }
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              exact={true}
              className="popup-nav__link"
              activeClassName="popup-nav__link_active"
              onClick={ onButtonClick }
            >
              Фильмы
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved-movies"
              exact={true}
              className="popup-nav__link"
              activeClassName="popup-nav__link_active"
              onClick={ onButtonClick }
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <div className="popup-nav__account">
          <NavLink
            to="/profile"
            exact={true}
            className="popup-nav__account-link"
            onClick={ onButtonClick }
          >
              Аккаунт
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Popup;