import React from "react";

import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <form
        className="profile__form"
      >
        <div className="profile__form-body">
          <h1 className="profile__form-title">Привет, Виталий!</h1>
          <div className="profile__form-fieldset">
            <label
              className="profile__form-label"
              htmlFor="name"
            >
              Имя
            </label>
            <input
              className="profile__form-input"
              name="name"
              type="text"
              value="Виталий"
            />
          </div>
          <div className="profile__form-fieldset">
            <label
              className="profile__form-label"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="profile__form-input"
              name="email"
              type="text"
              value="pochta@yandex.ru"
            />
          </div>
        </div>
        <div className="profile__form-footer">
          <button
            className="profile__button profile__button-submit"
            type="submit"
          >
            Редактировать
          </button>
          <button
            className="profile__button profile__button-logout"
            type="button"
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;