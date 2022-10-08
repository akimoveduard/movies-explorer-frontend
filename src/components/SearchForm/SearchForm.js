import React from "react";

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm({
  onSubmit,
  searchRequest,
  isShortFilmsOn = false,
  setIsShortFilmsOn = '',
  isSavedShortFilmsOn = false,
  setIsSavedShortFilmsOn = '',
  isSavedShortFilms,
}) {

  const [request, setRequest] = React.useState(searchRequest);
  const [clickedCheckbox, setClickedCheckbox] = React.useState(false);

  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({mode: 'onSubmit'});

  React.useEffect(() => {
    if (clickedCheckbox && localStorage.getItem('localMovies')) onSubmit(request);
  }, [isShortFilmsOn]);

  React.useEffect(() => {
    if (clickedCheckbox) onSubmit(request);
  }, [isSavedShortFilmsOn]);

  function handleClickCheckbox() {
    setClickedCheckbox(true);
  }

  function handleInputChange(event) {
		setRequest(event.target.value);
	}

	const handleSearchSubmit = () => {
		onSubmit(request);
	};

  return(
    <section className="search-form">
      <form
        onSubmit={handleSubmit(handleSearchSubmit)}
        name="search"
        className="search-form__form"
      >
        <div className="search-form__input-container">
          <input
            {...register('request', {
              required: 'Нужно ввести ключевое слово',
              onChange: (event) => handleInputChange(event),
            })}
            type="text"
            name="request"
            value={request}
            autoFocus
            className="search-form__input"
            placeholder="Фильм"
            aria-label="Поле поиска фильмов"
          />
          <button className="search-form__button">
            <span className="search-form__button-caption">Искать</span>
          </button>
          <div className="search-form__error">
      <ErrorMessage
					errors={errors}
					name="request"
					render={({ message }) => <p className="search-form__error-container"><span className="search-form__error-message">{message}</span></p>}
				/>
			</div>
        </div>
        <FilterCheckbox
          isShortFilmsOn={isShortFilmsOn}
          setIsShortFilmsOn={setIsShortFilmsOn}
          isSavedShortFilmsOn={isSavedShortFilmsOn}
          setIsSavedShortFilmsOn={setIsSavedShortFilmsOn}
          isSavedShortFilms={isSavedShortFilms}
          onClickCheckbox={handleClickCheckbox}
        />
        
      </form>
    </section>
  );
}

export default SearchForm;