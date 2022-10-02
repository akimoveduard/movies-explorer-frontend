import React, { useEffect } from "react";

import { Switch, Route } from "react-router-dom";

import noImage from '../../images/no_photo.png';
import { URL_REGEXP, URLS } from "../../utils/constants";

import './MovieCard.css';

function MovieCard({
  movieData,
  movieSaved = '',
  onSaveClick,
  onDelete
}) {

  const imageSiteURL = URLS.moviesApiServer;

  const declOfMinutes = (n) => {
    const indTitle = [n%10===1 && n%100!==11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
    const titles = ['минута', 'минуты', 'минут'];
    return titles[indTitle];
  };

  const movieCard = (
    {
      title: movieData.nameRU || 'Нет данных',
      duration: `${movieData.duration} ${declOfMinutes(movieData.duration)}` || '0 минут',
      image: movieData.thumbnail || imageSiteURL + movieData.image.formats.thumbnail.url,
      altImage: movieData.nameRU,
      link: movieData.trailerLink,
    }
  );

  function handleSaveButtonClick() {
    onSaveClick(movieData);
  };

  function handleDeleteClick() {
    onDelete(movieData);
  };

  return (
    <div className="movie-card">
      <div className="movie-card__content">
        <div className="movie-card__header">
          <h2 className="movie-card__title">{movieCard.title}</h2>
          <p className="movie-card__duration">{movieCard.duration}</p>
        </div>
        <div className="movie-card__image-container">
          <a href={movieCard.link} target="_blank" rel="noreferrer">
            <img className="movie-card__image" src={movieCard.image} alt={movieData.nameRU} />
          </a>
        </div>
        <div className="movie-card__footer">
          <Switch>
            <Route path="/movies">
              {movieSaved
                ? (<button
                    className="movie-card__button movie-card__checkmark"
                    type="button"
                    onClick={handleDeleteClick}
                  />)
                : (<button
                    className="movie-card__button movie-card__button-save"
                    type="button"
                    onClick={handleSaveButtonClick}>
                    Сохранить
                  </button>)
              }
            </Route>
            <Route path="/saved-movies">
              <button
                className="movie-card__button movie-card__button-delete"
                type="button"
                onClick={handleDeleteClick}
              >
                <span className="movie-card__button-delete-caption">Удалить</span>
              </button>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;