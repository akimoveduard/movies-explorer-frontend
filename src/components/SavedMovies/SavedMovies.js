import React from "react";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import '../Movies/Movies.css';
import './SavedMovies.css';

function SavedMovies() {

  return(
    <div className="movies saved-movies">
      <SearchForm />
      <MoviesCardList
        showMoreButton={false}
      />
    </div>
  );
}

export default SavedMovies;