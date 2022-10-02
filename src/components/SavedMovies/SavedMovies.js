import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { MoviesContext } from "../../contexts/MoviesContext";

import SearchForm from '../SearchForm/SearchForm';
import SearchSavedMoviesError from "../SearchSavedMoviesError/SearchSavedMoviesError";
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import '../Movies/Movies.css';
import './SavedMovies.css';

function SavedMovies({
  moviesData,
  searchRequest,
  onSubmit,
  onDelete,
  onSaveClick,
  errorMessage,
  onLoad
}) {

  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, [history]);

  const {
    isSavedShortFilmsOn,
    setIsSavedShortFilmsOn,
  } = React.useContext(MoviesContext);

  return(
    <div className="movies saved-movies">
      <SearchForm
        onSubmit={onSubmit}
        searchRequest={searchRequest}
        isSavedShortFilmsOn={isSavedShortFilmsOn}
        setIsSavedShortFilmsOn={setIsSavedShortFilmsOn}
        isSavedShortFilms={true}
      />
      {errorMessage &&
        <SearchSavedMoviesError
          errorMessage={errorMessage}
        />
      }
      <MoviesCardList
        isSavedMovies={true}
        moviesData={moviesData}
        showMoreButton={true}
        onSaveClick={onSaveClick}
        onDelete={onDelete}
      />
    </div>
  );
}

export default SavedMovies;