import React from "react";

import Form from "../Form/Form";

import './Auth.css';

const INPUTS = [
  {
    key: 1,
    type: 'email',
    name: 'email',
    label: 'E-mail',
    placeholder: 'E-mail',
    required: true,
  },
  {
    key: 2,
    type: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
    require: true,
  }
];

const CLOSE_LINK_SETTINGS = {
  title: 'Регистрация',
  path: '/signup',
}

function Register() {
  return (
    <main className="auth">
      <Form
        name="auth"
        greetings='Рады видеть!'
        inputs={INPUTS}
        buttonCaption='Войти'
        closeText='Еще не зарегистрированы?'
        closeLink={CLOSE_LINK_SETTINGS}
      />
    </main>
  );
}

export default Register;