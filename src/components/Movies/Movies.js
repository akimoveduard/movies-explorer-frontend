import React, { useEffect } from "react";

import { MoviesContext } from "../../contexts/MoviesContext";

import Preloader from '../Preloader/Preloader';
import SearchError from "../SearchError/SearchError";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './Movies.css';

function Movies({
  moviesData,
  savedMoviesIds,
  searchRequest,
  onSubmit,
  onDelete,
  isLoading,
  onSaveClick,
  errorMessage,
}) {

  const {
    isShortFilmsOn,
    setIsShortFilmsOn,
  } = React.useContext(MoviesContext);

  return(
    <div className="movies">
      <SearchForm
        onSubmit={onSubmit}
        searchRequest={searchRequest}
        isShortFilmsOn={isShortFilmsOn}
        setIsShortFilmsOn={setIsShortFilmsOn}
        isSavedShortFilms={false}
      />
      {errorMessage &&
        <SearchError
          errorMessage={errorMessage}
        />
      }
      {isLoading &&
        <div className="preloader-container">
          <Preloader />
        </div>
      }
      <MoviesCardList
        isSavedMovies={false}
        moviesData={moviesData}
        savedMoviesIds={savedMoviesIds}
        showMoreButton={true}
        onSaveClick={onSaveClick}
        onDelete={onDelete}
      />
    </div>
  );
}

export default Movies;
