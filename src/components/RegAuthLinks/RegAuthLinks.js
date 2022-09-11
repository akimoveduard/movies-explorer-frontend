import { NavLink } from "react-router-dom";

import "./RegAuthLinks.css";

function RegAuthLinks() {

  return (
    <nav className="reg-auth-links">
      <ul className="reg-auth-links__list">
        <li className="reg-auth-links__list-item">
          <NavLink
            to="/signup"
            className="reg-auth-links__link"
          >
            Регистрация
          </NavLink>
        </li>
        <li className="reg-auth-links__list-item">
          <NavLink
            to="/signin"
            className="reg-auth-links__link button-link"
          >
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default RegAuthLinks;
