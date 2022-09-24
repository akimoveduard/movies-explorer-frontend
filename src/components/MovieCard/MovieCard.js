import React from "react";

import { Switch, Route } from "react-router-dom";

import noImage from '../../images/no_photo.png';

import './MovieCard.css';

function MovieCard({movieData}) {

  const imageSiteURL = "https://api.nomoreparties.co/";

  const declOfMinutes = (n) => {
    const indTitle = [n%10===1 && n%100!==11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
    const titles = ['минута', 'минуты', 'минут'];
    return titles[indTitle];
  }

  const movieCard = (
    {
      title: movieData.nameRU || 'Нет данных',
      duration: `${movieData.duration} ${declOfMinutes(movieData.duration)}` || '0 минут',
      image: `${imageSiteURL}${movieData.image.url}` || noImage,
      altImage: movieData.nameRU
    }
  );

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{movieCard.title}</h2>
        <p className="movie-card__duration">{movieCard.duration}</p>
      </div>
      <div className="movie-card__image-container">
        <img className="movie-card__image" src={movieCard.image} alt={movieData.nameRU} />
      </div>
      <div className="movie-card__footer">
        <Switch>
          <Route path="/movies">
            {movieData.saved
              ? (<button className="movie-card__button movie-card__checkmark" type="button" />)
              : (<button className="movie-card__button movie-card__button-save" type="button">
                  Сохранить
                </button>)
            }
          </Route>
          <Route path="/saved-movies">
            <button className="movie-card__button movie-card__button-delete" type="button">
              <span className="movie-card__button-delete-caption">Удалить</span>
            </button>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default MovieCard;