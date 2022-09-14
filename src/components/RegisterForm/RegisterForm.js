import React from 'react';
import { Link } from "react-router-dom";

import Form from '../Form/Form';

function RegisterForm() {
  return(
    <>
      <Form
        name="register"
        buttonCaption="Зарегистрироваться"
      >
        <label className="form__label">
          Имя
        </label>
        <input 
          className="form__input"
          type="text"
          name="username"
          required
          autoFocus
          placeholder="Имя"
          aria-label="Имя"
          minLength="2"
          maxLength="40"
        />
        <label className="form__label">
          E-mail
        </label>
        <input
          className="form__input"
          type="email"
          name="email"
          required
          placeholder="E-mail"
          aria-label="E-mail"
        />
        <label className="form__label">
          Пароль
        </label>
        <input
          className="form__input"
          type="password"
          name="password"
          placeholder="Пароль"
          aria-label="Пароль"
        />
        <span className="form__input-error register-password-error">
          Что-то пошло не так...
        </span>
    </Form>
    <p className="register__form-close-text">
      Уже зарегистрированы?&nbsp;
      <Link to="/signin" className="register__form-close-link">
        Войти
      </Link>
    </p>
    </>
  );
}

export default RegisterForm;