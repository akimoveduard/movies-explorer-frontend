import React from 'react';

import {
  Redirect,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import Header from '../Header/Header';
import Popup from '../Popup/Popup';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Auth from '../Auth/Auth';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import "./App.css";

function App() {

  const [isPopupOpened, setPopupOpen] = React.useState(false);

  function handleBurgerButtonClick() {
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
  }

  const exeptionPathsHeader = [
    '/signup',
    '/signin',
    '/404',
  ];

  const exeptionPathsFooter = [
    '/signup',
    '/signin',
    '/404',
    '/Profile',
  ];

  /* иммитация авторизации */
  const isLogged = !useRouteMatch([
    '/movies',
    '/saved-movies',
    '/profile'
  ]);

  return (
    <div className="app">
      <div className="app__content">
        {useRouteMatch(exeptionPathsHeader)
          ? null
          : <>
              <Header
                isLogged={ !isLogged }
                onButtonClick={ handleBurgerButtonClick }
              />
              <Popup
                isOpened={ isPopupOpened }
                onButtonClick={ closePopup }
              />
            </>
        }
        <Switch>
          <Route
            exact path="/"
            component={ Main }
          />
          <Route
            path="/signup"
            component={ Register }
          />
          <Route
            path="/signin"
            component={ Auth }
          />
          <Route
            path="/movies"
            component={ Movies }
          />
          <Route
            path="/saved-movies"
            component={ SavedMovies }
          />
          <Route
            path="/profile"
            component={ Profile }
          />
          <Route
            path="/404"
            component={ NotFoundPage }
          />
          <Redirect to="/404" />
        </Switch>
        {useRouteMatch(exeptionPathsFooter)
          ? null
          : (<Footer />)}
      </div>
    </div>
  );
}

export default App;
