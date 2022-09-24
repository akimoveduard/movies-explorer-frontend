import React from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Form from "../Form/Form";

import './Auth.css';

const CLOSE_LINK_SETTINGS = {
  title: 'Регистрация',
  path: '/signup',
}

function Auth({
  onLogin,
  isFormErrorMessageShown,
  formErrorMessage
}) {

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

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    onLogin(email, password);
  }

  return (
    <main className="auth">
      <Form
        name="auth"
        greetings='Рады видеть!'
        buttonCaption='Войти'
        closeText='Еще не зарегистрированы?'
        closeLink={CLOSE_LINK_SETTINGS}
        onSubmit={handleSubmit(handleLogin)}
        buttonSubmitEnable={buttonSubmitEnable}
        isFormErrorMessageShown={isFormErrorMessageShown}
        formErrorMessage={formErrorMessage}
      >
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

export default Auth;