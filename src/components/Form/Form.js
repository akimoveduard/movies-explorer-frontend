import React from "react";
import { Link } from "react-router-dom";

import logo from '../../images/logo.svg';

import './Form.css';

function Form({ 
  name,
  greetings,
  inputs,
  buttonCaption,
  closeText,
  closeLink
 }) {

  const inputsMarkup = inputs.map((item) => (
    <div
      key={item.key}
      className="form__input-container">
        <label className="form__label">
          {item.label}
        </label>
        <input
          className="form__input"
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          required={item.required}
        />
        <span className={`form__input-error ${item.name}-input-error`}></span>
    </div>
    
  ));

  return(
    <form
      name={name}
      className={`form form-${name}`}
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
        { inputsMarkup }
      </div>
      <div className={`form__footer ${name}__footer`}>
        <button className="form__button" type="submit">
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
