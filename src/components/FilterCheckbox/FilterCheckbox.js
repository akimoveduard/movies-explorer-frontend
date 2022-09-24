import React from "react";

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
      <label htmlFor="shorties" className="filter-checkbox">
        <input 
          id="shorties"
          name="filter-checkbox"
          className="filter-checkbox__checkbox"
          value="true"
          type="checkbox" />
        <span className="filter-checkbox__pseudo-checkbox"></span>
        <span className="filter-checkbox__label">Короткометражки</span>
      </label>
  );
}

export default FilterCheckbox;
