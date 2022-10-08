import React from "react";
import { Link } from "react-router-dom";

import logo from '../../images/logo.svg';

import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";

import './Form.css';

function Form({ 
  name,
  greetings,
  buttonCaption,
  onSubmit,
  closeText,
  closeLink,
  children,
  buttonSubmitEnable,
  isFormErrorMessageShown,
  formErrorMessage
 }) {

  return(
    <form
      name={name}
      className={`form form-${name}`}
      onSubmit={onSubmit}
    >
      <div className={`form__body ${name}__header`}>
        <div className="form__title-container">
          <Link to="/" className="form__logo-link">
            <img className="form__logo" src={logo} alt="Movies Explorer" />
          </Link>
          <h1 className="form__title">{greetings}</h1>
        </div>
      </div>
      <div className={`form__fieldset ${name}__fieldset`}>
        { children }
      </div>
      <div className={`form__footer ${name}__footer`}>
        {isFormErrorMessageShown &&
          (<FormErrorMessage
            formErrorMessage={formErrorMessage}
          />)
        }
        <button className="form__button" type="submit" disabled={!buttonSubmitEnable}>
          {buttonCaption}
        </button>
        <p className="form__close-text">
          { closeText }&nbsp;
          <Link
            className="form__close-link"
            to={ closeLink.path }>
              { closeLink.title }
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Form;
