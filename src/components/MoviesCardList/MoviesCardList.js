import React from "react";

import { Switch, Route } from "react-router-dom";

import MovieCard from '../MovieCard/MovieCard';

import './MoviesCardList.css';

/* только для демонстрации */
import img001Path from '../../images/movies-images/001.jpg';
import img002Path from '../../images/movies-images/002.jpg';
import img003Path from '../../images/movies-images/003.jpg';
import img004Path from '../../images/movies-images/004.jpg';
import img005Path from '../../images/movies-images/005.jpg';
import img006Path from '../../images/movies-images/006.jpg';
import img007Path from '../../images/movies-images/007.jpg';
import img008Path from '../../images/movies-images/008.jpg';
import img009Path from '../../images/movies-images/009.jpg';
import img010Path from '../../images/movies-images/010.jpg';
import img011Path from '../../images/movies-images/011.jpg';
import img012Path from '../../images/movies-images/012.jpg';

function MoviesCardList({
  showMoreButton = true,
}) {

  const demoCardsData = [
    {
      key: 1,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img001Path,
      saved: true,
    },
    {
      key: 2,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img002Path,
      saved: true,
    },
    {
      key: 3,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img003Path,
      saved: false,
    },
    {
      key: 4,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img004Path,
      saved: false,
    },
    {
      key: 5,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img005Path,
      saved: false,
    },
    {
      key: 6,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img006Path,
      saved: true,
    },
    {
      key: 7,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img007Path,
      saved: true,
    },
    {
      key: 8,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img008Path,
      saved: false,
    },
    {
      key: 9,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img009Path,
      saved: false,
    },
    {
      key: 10,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img010Path,
      saved: false,
    },
    {
      key: 11,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img011Path,
      saved: true,
    },
    {
      key: 12,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img012Path,
      saved: false,
    },
  ];

  const demoSavedCardsData = [
    {
      key: 1,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img001Path,
    },
    {
      key: 2,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img002Path,
    },
    {
      key: 3,
      title: 'В погоне за Бэнкси',
      duration: '27',
      image: img003Path,
    },
  ];

  return(
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
        <Switch>
          <Route
            path="/movies"
          >
            {demoCardsData.map((item) => 
              <MovieCard
                key={item.key}
                movieData={item}
              />
            )}
          </Route>
          <Route
            path="/saved-movies">
              {demoSavedCardsData.map((item) => 
              <MovieCard
                key={item.key}
                movieData={item}
              />
            )}
          </Route>
        </Switch>
      </div>
      {showMoreButton
      ? (
        <div className="movies-card-list__button-container">
          <button className="movies-card-list__button">
            Еще
          </button>
        </div>
      ) : (
        null
      )
      }
    </section>
  );
}

export default MoviesCardList;
