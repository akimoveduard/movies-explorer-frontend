import React from "react";
import { Link } from "react-router-dom";

import "./RegAuthLinks.css";

function RegAuthLinks() {

  return (
    <nav className="reg-auth-links">
      <ul className="reg-auth-links__list">
        <li className="reg-auth-links__list-item">
          <Link
            to="/signup"
            className="reg-auth-links__link"
          >
            Регистрация
          </Link>
        </li>
        <li className="reg-auth-links__list-item">
          <Link
            to="/signin"
            className="reg-auth-links__link button-link"
          >
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default RegAuthLinks;
