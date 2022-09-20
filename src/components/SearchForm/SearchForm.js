import React from "react";

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm() {

  return(
    <section className="search-form">
      <form
        name="search"
        className="search-form__form"
      >
        <div className="search-form__input-container">
          <input
            type="text"
            name="request"
            required
            className="search-form__input"
            placeholder="Фильм"
          />
          <button className="search-form__button">
            <span className="search-form__button-caption">Искать</span>
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;