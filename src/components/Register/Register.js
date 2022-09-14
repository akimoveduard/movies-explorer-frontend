import React from "react";

import Form from "../Form/Form";

import './Register.css';

const INPUTS = [
  {
    key: 1,
    type: 'text',
    name: 'name',
    label: 'Имя',
    placeholder: 'Имя',
    required: true,
  },
  {
    key: 2,
    type: 'email',
    name: 'email',
    label: 'E-mail',
    placeholder: 'E-mail',
    required: true,
  },
  {
    key: 3,
    type: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
    require: true,
  }
];

const CLOSE_LINK_SETTINGS = {
  title: 'Войти',
  path: '/signin',
}

function Register() {
  return (
    <main className="register">
      <Form
        name="register"
        greetings='Добро пожаловать!'
        inputs={INPUTS}
        buttonCaption='Зарегистрироваться'
        closeText='Уже зарегистрированы?'
        closeLink={CLOSE_LINK_SETTINGS}
      />
    </main>
  );
}

export default Register;