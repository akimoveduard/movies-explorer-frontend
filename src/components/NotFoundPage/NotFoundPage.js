import React from "react";

import { useHistory } from "react-router-dom";

import './NotFoundPage.css';

function NotFoundPage() {

  const history = useHistory();

  const handleGoBackClick = () => history.goBack();

  return(
    <main className="not-found-page">
      <div className="not-found-page__text">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__subtitle">Страница не найдена</p>
      </div>
      <button
        className="not-found-page__go-back-button"
        onClick={handleGoBackClick}
      >
        Назад
      </button>
    </main>
  );
}

export default NotFoundPage;
