import React from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useHistory } from "react-router-dom";

import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import Notification from "../Notification/Notification";

import './Profile.css';

function Profile({
  currentUser,
  onUpdate,
  onLogout,
  isFormErrorMessageShown,
  formErrorMessage,
  notificationMessage,
  clearErrors
}) {

  const history = useHistory();
  
  React.useEffect(() => {
    clearErrors();
  }, [history]);
  
  const [username, setUsername] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  const [buttonSubmitEnable, SetButtonSubmitEnable] = React.useState(false);

  const {
		register,
		handleSubmit,
		formState: {errors, isValid},
	} = useForm({
        mode: 'onChange',
        defaultValues: {
          name: currentUser.name,
          email: currentUser.email,
        },
      });

  React.useEffect(() => {
    if (username === currentUser.name && email === currentUser.email && isValid) {
      SetButtonSubmitEnable(true);
    } else if (isValid) SetButtonSubmitEnable(true);
		else SetButtonSubmitEnable(false);
	}, [isValid, username, email, currentUser.name, currentUser.email]);  

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const handleUpdateProfile = () => {
    onUpdate(username, email);
  }

  return (
    <section className="profile">
      <form
        className="profile__form"
        name="profile"
        onSubmit={handleSubmit(handleUpdateProfile)}
      >
        <div className="profile__form-body">
          <h1 className="profile__form-title">Привет, {currentUser.name || 'username'}!</h1>
          <div className="profile__form-fieldset">
            <label
              className="profile__form-label"
              htmlFor="name"
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
              className={errors?.username
                ? 'profile__form-input profile__form-input-error'
                : 'profile__form-input'}
              name="username"
              type="text"
              value={username}
            />
            <ErrorMessage
              errors={errors}
              name="username"
              render={({ message }) => <span className="profile__form-error-message">{message}</span>}
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
              {...register('email', {
                required: 'Обязательное поле',
                pattern: {
                  value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                  message: 'Введите e-mail'
                },
                onChange: (event) => handleEmailChange(event),
              })}
              className={errors?.email
                ? 'profile__form-input profile__form-input-error'
                : 'profile__form-input'}
              name="email"
              type="text"
              value={email}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <span className="profile__form-error-message">{message}</span>}
            />
          </div>
        </div>
        <div className="profile__form-footer">
          {notificationMessage &&
            <Notification
              notificationMessage={notificationMessage}
            />
          }
          {isFormErrorMessageShown &&
            <FormErrorMessage
              formErrorMessage={formErrorMessage}
            />
          }
          <button
            className="profile__button profile__button-submit"
            type="submit"
            disabled={!buttonSubmitEnable}
          >
            Редактировать
          </button>
          <button
            className="profile__button profile__button-logout"
            type="button"
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </form>
    </section>
  );
}

export default Profile;