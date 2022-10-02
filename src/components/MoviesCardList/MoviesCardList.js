import React from "react";

import { useScreenWidth } from '../../hooks/useScreenWidth';
import { SCREEN_WIDTH, CARDSLIST_LENGTH } from '../../utils/constants';

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
    if (screenWidth > SCREEN_WIDTH.tablet) {
      setLengthCardsList(CARDSLIST_LENGTH.tablet.cards);
      setLengthCardsListMore(CARDSLIST_LENGTH.tablet.morecards);
    } else if (screenWidth <= SCREEN_WIDTH.tablet && screenWidth > SCREEN_WIDTH.small) {
      setLengthCardsList(CARDSLIST_LENGTH.small.cards);
      setLengthCardsListMore(CARDSLIST_LENGTH.small.morecards);
    } else if (screenWidth <= SCREEN_WIDTH.xsmall) {
      setLengthCardsList(CARDSLIST_LENGTH.xsmall.cards);
      setLengthCardsListMore(CARDSLIST_LENGTH.xsmall.morecards);
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
