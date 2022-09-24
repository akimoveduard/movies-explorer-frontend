import React from "react";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies({
  onSubmit,
  moviesData,
  prevSearchRequest,
  isLoading
}) {

  return(
    <div className="movies">
      <SearchForm
        onSubmit={onSubmit}
        prevSearchRequest={prevSearchRequest}
      />   
      <MoviesCardList
        moviesData={moviesData}
        showMoreButton={true}
      />
    </div>
  );
}

export default Movies;
