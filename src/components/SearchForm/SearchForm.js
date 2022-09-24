import React from "react";

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm({
  onSubmit,
  prevSearchRequest
}) {

  const [searchRequest, setSearchRequest] = React.useState(prevSearchRequest);

  function handleChangeInput(event) {
		setSearchRequest(event.target.value);
	}

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(searchRequest);
  }

  return(
    <section className="search-form">
      <form
        onSubmit={handleSubmit}
        name="search"
        className="search-form__form"
      >
        <div className="search-form__input-container">
          <input
              type="text"
              name="request"
              value={searchRequest}
              onChange={handleChangeInput}
              pattern="^[A-Za-zа-яА-ЯёЁ0-9-\s]*$"
              required
              autoFocus
              className="search-form__input"
              placeholder="Фильм"
              aria-label="Поле поиска фильмов"
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