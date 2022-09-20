import React from "react";
import { NavLink, Link } from "react-router-dom";

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
            <NavLink
              to="/movies"
              className="popup-nav__link"
              activeClassName="popup-nav__link_active"
              onClick={ onButtonClick }
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="popup-nav__link"
              activeClassName="popup-nav__link_active"
              onClick={ onButtonClick }
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <div className="popup-nav__account">
          <Link
            to="/profile"
            className="popup-nav__account-link"
            onClick={ onButtonClick }
          >
              Аккаунт
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Popup;