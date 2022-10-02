import React from "react";

import './FilterCheckbox.css';

function FilterCheckbox({
  isShortFilmsOn,
  setIsShortFilmsOn,
  isSavedShortFilmsOn,
  setIsSavedShortFilmsOn,
  isSavedShortFilms,
  onClickCheckbox,
}) {


  const handleToggleCheckbox = (event) => {
    onClickCheckbox();
    if (!isSavedShortFilms) {
      setIsShortFilmsOn(event.target.checked);
      event.target.checked === true
      ? localStorage.setItem('searchShortFilms', 'checked')
      : localStorage.removeItem('searchShortFilms');
    } else {
      setIsSavedShortFilmsOn(event.target.checked);
    }
  };

  return (
      <label htmlFor="filter-checkbox" className="filter-checkbox">
        <input 
          id="filter-checkbox"
          name="filter-checkbox"
          className="filter-checkbox__checkbox"
          type="checkbox"
          onChange={(event) => handleToggleCheckbox(event)}
          defaultChecked={isShortFilmsOn}
          />
        <span className="filter-checkbox__pseudo-checkbox"></span>
        <span className="filter-checkbox__label">Короткометражки</span>
      </label>
  );
}

export default FilterCheckbox;
