import React from "react";

import { Switch, Route } from "react-router-dom";

import './MovieCard.css';

function MovieCard(props) {

  return (
    <div className="movie-card">
      <div className="movie-card__header">
        <h2 className="movie-card__title">{props.movieData.title}</h2>
        <p className="movie-card__duration">{props.movieData.duration}&nbsp;минут</p>
      </div>
      <div className="movie-card__image-container">
        <img className="movie-card__image" src={props.movieData.image} alt={props.movieData.title} />
      </div>
      <div className="movie-card__footer">
        <Switch>
          <Route path="/movies">
            {props.movieData.saved
              ? (<span className="movie-card__button movie-card__checkmark"></span>)
              : (<button className="movie-card__button movie-card__button-save">
                  Сохранить
                </button>)
            }
          </Route>
          <Route path="/saved-movies">
            <button className="movie-card__button movie-card__button-delete">
              <span className="movie-card__button-delete-caption">Удалить</span>
            </button>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default MovieCard;