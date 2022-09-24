import React from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Form from "../Form/Form";

import './Register.css';

const CLOSE_LINK_SETTINGS = {
  title: 'Войти',
  path: '/signin',
}

function Register({
  onRegistration,
  isFormErrorMessageShown,
  formErrorMessage
}) {

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [buttonSubmitEnable, SetButtonSubmitEnable] = React.useState(false);

  const {
		register,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({ mode: 'onChange' });

  React.useEffect(() => {
		if (!isValid) {
			SetButtonSubmitEnable(false);
		} else {
      SetButtonSubmitEnable(true);
    }
	}, [isValid]);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleRegistration = () => {
    onRegistration(username, email, password);
  }

  return (
    <main className="register">
      <Form
        name="register"
        greetings='Добро пожаловать!'
        buttonCaption='Зарегистрироваться'
        closeText='Уже зарегистрированы?'        
        closeLink={CLOSE_LINK_SETTINGS}
        onSubmit={handleSubmit(handleRegistration)}
        buttonSubmitEnable={buttonSubmitEnable}
        isFormErrorMessageShown={isFormErrorMessageShown}
        formErrorMessage={formErrorMessage}
      >
        <div className="form__input-container">
          <label
            htmlFor="username"
            className="form__label"
          >
            Имя
          </label>
          <input
            {...register('username', {
              required: 'Обязательное поле',
              pattern: {
                value: /^[A-Za-zа-яА-ЯёЁ0-9-\s]*$/,
                message: 'Разрешены буквы, цифры и дефис'
              },
              onChange: (event) => handleUsernameChange(event),
            })}
            name='username'
            type='text'
            className={errors?.username
              ? 'form__input form__input-error'
              : 'form__input'}
            value={username || ''}
          />
          <ErrorMessage
						errors={errors}
						name="username"
						render={({ message }) => <span className="form__error-message">{message}</span>}
					/>
        </div>
        <div className="form__input-container">
          <label
            htmlFor="email"
            className="form__label"
          >
            E-mail
          </label>
          <input
            {...register('email', {
              required: 'Обязательное поле',
              pattern: {
                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                message: 'Введите e-mail'
              },
              onChange: (event) => handleEmailChange(event),
            })}
            name='email'
            type='email'
            className={errors?.email
              ? 'form__input form__input-error'
              : 'form__input'}
            value={email || ''}
          />
          <ErrorMessage
						errors={errors}
						name="email"
						render={({ message }) => <span className="form__error-message">{message}</span>}
					/>
        </div>
        <div className="form__input-container">
          <label
            htmlFor="password"
            className="form__label"
          >
            Пароль
          </label>
          <input
            {...register('password', {
              required: 'Обязательное поле',
              onChange: (event) => handlePasswordChange(event),
            })}
            name='password'
            type='password'
            className={errors?.password
              ? 'form__input form__input-error'
              : 'form__input'}
            value={password || ''}
          />
          <ErrorMessage
						errors={errors}
						name="password"
						render={({ message }) => <span className="form__error-message">{message}</span>}
					/>
        </div>
      </Form>
    </main>
  );
}

export default Register;