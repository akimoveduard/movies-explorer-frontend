import React from "react";

import { useScreenWidth } from '../../hooks/useScreenWidth';

import MovieCard from '../MovieCard/MovieCard';

import './MoviesCardList.css';

function MoviesCardList({
  isSavedMovies,
  showMoreButton,
  moviesData,
  savedMoviesIds = [],
  onSaveClick,
  onDelete,
}) {

  const [lengthCardsList, setLengthCardsList] = React.useState(null);
  const [lengthCardsListMore, setLengthCardsListMore] = React.useState(null);
  const [moviesCardsList, setMoviesCardsList] = React.useState([]);
  const [isButtonMoreVisible, setIsButtonMoreVisible] = React.useState(showMoreButton);

  const screenWidth = useScreenWidth();

  React.useEffect(() => {
    if (screenWidth > 1024) {
      setLengthCardsList(12);
      setLengthCardsListMore(3);
    } else if (screenWidth <= 1024 && screenWidth > 556) {
      setLengthCardsList(8);
      setLengthCardsListMore(2);
    } else if (screenWidth <= 555) {
      setLengthCardsList(5);
      setLengthCardsListMore(2);
    }
  }, [screenWidth, lengthCardsList, lengthCardsListMore]);

  React.useEffect(() => {
    if (!isSavedMovies) {
      setMoviesCardsList(moviesData.slice(0, lengthCardsList));
      if (moviesData.length <= lengthCardsList) {
        setIsButtonMoreVisible(false);
      } else {
        setIsButtonMoreVisible(true);
      }
    } else {
      setMoviesCardsList(moviesData);
      setIsButtonMoreVisible(false);
    }
  }, [moviesData, lengthCardsList]);

  const handleMoreButtonClick = () => {
    setMoviesCardsList(moviesData.slice(0, moviesCardsList.length + lengthCardsListMore));
    if (moviesCardsList.length >= moviesData.length - lengthCardsListMore) {
      setIsButtonMoreVisible(false);
    }
  };

  return(
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        {moviesCardsList.map((movie) => 
          <MovieCard
            key={movie.id || movie._id}
            movieData={movie}
            movieSaved={savedMoviesIds.some(id => id === movie.id)}
            onSaveClick={onSaveClick}
            onDelete={onDelete}
          />
        )}
      </div>
      {isButtonMoreVisible &&
        <div className="movies-card-list__button-container">
          <button
            className="movies-card-list__button"
            onClick={handleMoreButtonClick}
            type="button"
          >
            Ещё
          </button>
        </div>
      }
    </section>
  );
}

export default MoviesCardList;
